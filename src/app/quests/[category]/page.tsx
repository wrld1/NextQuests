import { categories } from "@/constants/categories";
import React from "react";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.type }));
}

export default async function CategoryQuestsPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  // const categoryItem = categories.find(({ type }) => type === category);
  return <div>quest page with category {category}</div>;
}
