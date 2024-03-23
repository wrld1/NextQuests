import { categories } from "@/constants/categories";
import React, { Suspense } from "react";
import QuestCardList from "../_components/QuestCardList";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.type }));
}

export default async function CategoryQuestsPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const categoryItem = categories.find(({ type }) => type === category);
  if (!categoryItem) {
    notFound();
  }

  return (
    <div className="flex gap-2">
      <Suspense fallback={<div>Loading...</div>}>
        <QuestCardList category={category} />
      </Suspense>
    </div>
  );
}
