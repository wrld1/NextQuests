import { Suspense } from "react";
import QuestInfo from "../components/QuestInfo";
import { Metadata, ResolvingMetadata } from "next";
import { getQuestById } from "@/actions/getQuestById";

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

export default async function DetailedQuestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="container mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <QuestInfo questId={id} />
        </Suspense>
      </div>
    </>
  );
}
