import { getQuests } from "@/actions/getQuests";
import { categories } from "@/constants/categories";
import React, { Suspense } from "react";
import QuestCardList from "./_components/QuestCardList";
import Spinner from "@/components/Spinner";

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
      <Suspense fallback={<div>Loading...</div>}>
        <QuestCardList />
      </Suspense>
    </div>
  );
}
