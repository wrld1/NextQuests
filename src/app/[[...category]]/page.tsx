import { categories } from "@/constants/categories";
import React from "react";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: [category.type] }));
}

export default function QuestsPage({
  params: { category },
}: {
  params: { category?: string[] };
}) {
  // const categoryItem = categories.find(({ type }) => type === category);
  return (
    <ul className="flex gap-2">
      {categories.map((category) => (
        <li key={category.label}>{category.label}</li>
      ))}
    </ul>
  );
}
