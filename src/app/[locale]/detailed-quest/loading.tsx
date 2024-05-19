import SkeletonQuestInfo from "./_components/SkeletonQuestInfo";

export default function Loading() {
  return (
    <div className="container mx-auto flex justify-end ">
      <div className="w-2/4 flex-col">
        <SkeletonQuestInfo />
      </div>
    </div>
  );
}
