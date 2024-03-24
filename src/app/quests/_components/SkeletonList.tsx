import QuestCardSkeleton from "@/components/QuestCardSkeleton/QuestCardSkeleton";

async function SkeletonList() {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 mt-10 mx-auto">
      <QuestCardSkeleton />
      <QuestCardSkeleton />
      <QuestCardSkeleton />
      <QuestCardSkeleton />
      <QuestCardSkeleton />
    </div>
  );
}

export default SkeletonList;
