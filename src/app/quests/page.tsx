import { getQuests } from "@/actions/getQuests";
import { categories } from "@/constants/categories";
import React from "react";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.type }));
}

export default async function QuestsPage({
  params,
}: {
  params: { category: string };
}) {
  // const categoryItem = categories.find(({ type }) => type === category);
  const quests = await getQuests();

  console.log(quests);
  return <ul className="flex gap-2">Something</ul>;
}
