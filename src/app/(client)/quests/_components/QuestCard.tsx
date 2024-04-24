import Link from "next/link";
import Image from "next/image";
import { translations } from "@/constants/translations";

type QuestCardProps = {
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
}: QuestCardProps) {
  return (
    <Link href={`/detailed-quest/${id}`} className="relative">
      <Image
        src={`/${previewImg}`}
        alt="Quest image"
        width={344}
        height={232}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute p-4 inset-x-0 bottom-0 backdrop-blur-sm rounded-lg border-0">
        <h3 className="text-textWhite text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-white text-lg flex gap-3">
          <span className="text-textWhite font-medium text-sm flex gap-2 border-r-[1px] border-white pr-3">
            <Image
              src="/icons/PersonIcon.svg"
              width={14}
              height={14}
              alt="Person icon"
            />
            {peopleCount[0]} - {peopleCount[1]} люд.
          </span>
          <span className="text-textWhite font-medium text-sm mr-2 flex gap-2">
            <Image
              src="/icons/DifficultyIcon.svg"
              width={14}
              height={14}
              alt="Difficulty icon"
            />
            {translations.levels[level]}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default QuestCard;
