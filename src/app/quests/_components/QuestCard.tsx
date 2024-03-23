import Link from "next/link";
import Image from "next/image";

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
    <figure>
      <Link href={`/detailed-quest/${id}`}>
        <Image src={`/${previewImg}`} alt="Image" width={344} height={232} />
      </Link>
      <figcaption>
        <h3>{title}</h3>
        <p>
          <span>Level: {level} </span>
          <span>
            {peopleCount[0]} - {peopleCount[1]} чел.
          </span>
        </p>
      </figcaption>
    </figure>
  );
}

export default QuestCard;
