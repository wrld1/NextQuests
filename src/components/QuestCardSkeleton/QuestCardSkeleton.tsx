import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function QuestCardSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton width={344} height={232} />
      </p>
    </SkeletonTheme>
  );
}

export default QuestCardSkeleton;
