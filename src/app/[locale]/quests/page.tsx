import React, { Suspense } from "react";
import QuestCardList from "./_components/QuestCardList";
import SkeletonList from "./_components/SkeletonList";

export default async function QuestsPage() {
  return (
    <div className="flex gap-2">
      <Suspense fallback={<SkeletonList />}>
        <QuestCardList />
      </Suspense>
    </div>
  );
}
