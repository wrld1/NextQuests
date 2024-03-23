import QuestInfo from "../_components/QuestInfo";
import { Metadata } from "next";
import { getQuestById } from "@/actions/getQuestById";
import { categories } from "@/constants/categories";
import { getQuests } from "@/actions/getQuests";
import { Quest } from "@/types/Quest";
import { notFound } from "next/navigation";

type MetadataProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id;

  const quest = await getQuestById(id);

  return {
    title: quest.title,
  };
}

export async function generateStaticParams() {
  const data: Quest[] = await getQuests();
  return data.map((quest) => ({ id: `${quest.id} ` }));
}

export default async function DetailedQuestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const quest: Quest = await getQuestById(id);
  if (!quest) {
    notFound();
  }

  const { type, title, description, coverImg, level, peopleCount, duration } =
    quest;

  return (
    <div
      className="bg-scroll h-screen bg-cover bg-center text-textWhite pt-[150px]"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.3)), url(/${coverImg})`,
      }}
    >
      <div className="container mx-auto flex justify-end">
        <div className="w-2/4">
          <QuestInfo questId={id} />
        </div>
      </div>
    </div>
  );
}
