"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

type CategoriesListItemProps = {
  label: string;
  type: string;
  icon: string;
};

function CategoriesListItem({ label, type, icon }: CategoriesListItemProps) {
  const segment = useSelectedLayoutSegment();
  const isActive =
    (type === segment && segment !== null) || (type === "" && segment === null);

  return (
    <li className="last:border-r-0 border-r-[1px] border-[##FFFFFF52] ">
      <Link
        href={`/quests/${type}`}
        className="flex items-center h-10 px-10 gap-3 "
      >
        <Image
          src={icon}
          alt={label}
          height={0}
          width={0}
          style={{ width: "auto", height: "30px" }}
        />
        <span
          className={`text-textWhite text-sm hover:text-brandOrange font-bold  ${
            isActive ? "border-b-[2px] border-brandOrange" : "border-none"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default CategoriesListItem;
