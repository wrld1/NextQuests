import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MapSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton width={650} height={335} />
      </p>
    </SkeletonTheme>
  );
}

export default MapSkeleton;
