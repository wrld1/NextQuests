import QuestCard from "./QuestCard";
import { Quest } from "@/types/Quest";
import { getQuests } from "@/actions/getQuests";

type QuestCardListProps = {
  category?: string;
};

async function QuestCardList({ category = "all" }: QuestCardListProps) {
  const quests: Quest[] = await getQuests();

  const filteredQuests =
    category !== "all"
      ? quests.filter((quest) => quest.type === category)
      : quests;

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 mt-10 mx-auto">
      {filteredQuests.map((quest) => (
        <QuestCard
          key={quest.id}
          id={quest.id}
          title={quest.title}
          previewImg={quest.previewImg}
          level={quest.level}
          peopleCount={quest.peopleCount}
        />
      ))}
    </div>
  );
}

export default QuestCardList;
