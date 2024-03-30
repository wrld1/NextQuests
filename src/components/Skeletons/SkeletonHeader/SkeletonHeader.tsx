import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonHeader() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton width={500} height={83} />
      </p>
    </SkeletonTheme>
  );
}

export default SkeletonHeader;
