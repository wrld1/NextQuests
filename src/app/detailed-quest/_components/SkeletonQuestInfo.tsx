import SkeletonHeader from "@/components/Skeletons/SkeletonHeader/SkeletonHeader";
import SkeletonRow from "@/components/Skeletons/SkeletonRow/SkeletonRow";

async function SkeletonQuestInfo() {
  return (
    <div className="flex flex-col gap-8">
      <SkeletonHeader />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </div>
  );
}

export default SkeletonQuestInfo;
