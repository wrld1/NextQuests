import { getQuestById } from "@/actions/getQuestById";
import { Quest } from "@/types/Quest";
import { notFound } from "next/navigation";

async function QuestInfo({ questId }: { questId: string }) {
  const quest: Quest = await getQuestById(questId);
  if (!quest) {
    notFound();
  }

  const { type, title, description, coverImg, level, peopleCount, duration } =
    quest;

  return (
    <div>
      <p className="text-brandOrange">{type}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{level}</p>
      <p>
        {peopleCount[0]}-{peopleCount[1]} людей
      </p>
      <p>{duration} тривалість</p>
    </div>
  );
}

export default QuestInfo;
