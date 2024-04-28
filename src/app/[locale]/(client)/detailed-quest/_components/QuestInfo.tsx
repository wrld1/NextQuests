import { Quest } from "@/types/Quest";
import { notFound } from "next/navigation";
import Image from "next/image";
import { translations } from "@/constants/translations";

async function QuestInfo({ quest }: { quest: Quest }) {
  if (!quest) {
    notFound();
  }

  const { type, title, description, level, peopleCount, duration } = quest;

  return (
    <div>
      <p className="text-brandOrange font-medium text-sm">
        {translations.types[type]}
      </p>
      <h2 className="mt-2 mb-8 font-black text-white text-8xl uppercase">
        {title}
      </h2>
      <div className="pl-[30px] flex flex-col gap-5">
        <div className="flex gap-6">
          <span className="text-textWhite font-normal text-sm flex gap-2 border-r-[1px] border-white pr-6">
            <Image
              src="/icons/ClockIcon.svg"
              width={0}
              height={0}
              className="w-[14px] h-auto"
              alt="Clock icon"
            />
            {duration} хв
          </span>
          <span className="text-textWhite font-normal text-sm flex gap-2 border-r-[1px] border-white pr-6">
            <Image
              src="/icons/PersonIcon.svg"
              width={0}
              height={0}
              className="w-[14px] h-auto"
              alt="Person icon"
            />
            {peopleCount[0]}-{peopleCount[1]} люд.
          </span>
          <span className="text-textWhite font-normal text-sm mr-2 flex gap-2">
            <Image
              src="/icons/DifficultyIcon.svg"
              width={0}
              height={0}
              className="w-[14px] h-auto"
              alt="Difficulty icon"
            />
            {translations.levels[level]}
          </span>
        </div>
        <p className="font-medium text-base text-textWhite">{description}</p>
      </div>
    </div>
  );
}

export default QuestInfo;
