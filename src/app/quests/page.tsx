import { getQuests } from "@/actions/getQuests";
import { categories } from "@/constants/categories";
import React, { Suspense } from "react";
import QuestCardList from "./_components/QuestCardList";

import SkeletonList from "./_components/SkeletonList";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.type }));
}

export default async function QuestsPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className="flex gap-2">
      <Suspense fallback={<SkeletonList />}>
        <QuestCardList />
      </Suspense>
    </div>
  );
}
