import { getQuestById } from "@/actions/getQuestById";
import { Quest } from "@/types/Quest";
import { notFound } from "next/navigation";
import Image from "next/image";

async function QuestInfo({ questId }: { questId: string }) {
  const quest: Quest = await getQuestById(questId);
  if (!quest) {
    notFound();
  }

  const { type, title, description, coverImg, level, peopleCount, duration } =
    quest;

  return (
    <div>
      <p className="text-brandOrange font-medium text-sm">{type}</p>
      <h2 className="mt-2 mb-8 font-black text-white text-8xl uppercase">
        {title}
      </h2>
      <div className="pl-[30px] flex flex-col gap-5">
        <div className="flex gap-6">
          <span className="text-textWhite font-normal text-sm flex gap-2 border-r-[1px] border-white pr-6">
            <Image
              src="/icons/ClockIcon.svg"
              width={14}
              height={14}
              alt="Clock icon"
            />
            {duration} хв
          </span>
          <span className="text-textWhite font-normal text-sm flex gap-2 border-r-[1px] border-white pr-6">
            <Image
              src="/icons/PersonIcon.svg"
              width={14}
              height={14}
              alt="Person icon"
            />
            {peopleCount[0]}-{peopleCount[1]} люд.
          </span>
          <span className="text-textWhite font-normal text-sm mr-2 flex gap-2">
            <Image
              src="/icons/DifficultyIcon.svg"
              width={14}
              height={14}
              alt="Difficulty icon"
            />
            {level}
          </span>
        </div>
        <p className="font-medium text-sm text-textWhite">{description}</p>
      </div>
    </div>
  );
}

export default QuestInfo;
