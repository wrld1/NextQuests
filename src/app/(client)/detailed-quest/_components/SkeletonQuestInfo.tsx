import SkeletonHeader from "@/components/ui/Skeletons/SkeletonHeader/SkeletonHeader";
import SkeletonRow from "@/components/ui/Skeletons/SkeletonRow/SkeletonRow";

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
