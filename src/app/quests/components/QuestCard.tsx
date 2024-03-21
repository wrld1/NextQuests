"use client";

import Link from "next/link";
import Image from "next/image";

type CategoriesListItemProps = {
  id: number;
  title: string;
  previewImg: string;
  level: string;
  peopleCount: number[];
};

function QuestCard({
  id,
  title,
  previewImg,
  level,
  peopleCount,
}: CategoriesListItemProps) {
  return (
    <Link href={`/detailed-quest/${id}`}>
      {/* <Image src={previewImg} /> */}
      {title}
      {level}
      {peopleCount[0]}
    </Link>
  );
}

export default QuestCard;
