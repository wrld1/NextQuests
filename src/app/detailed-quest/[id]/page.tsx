import QuestInfo from "../_components/QuestInfo";
import { Metadata } from "next";
import { getQuestById } from "@/actions/getQuestById";
import { categories } from "@/constants/categories";
import { getQuests } from "@/actions/getQuests";
import { Quest } from "@/types/Quest";
import { notFound } from "next/navigation";
import Link from "next/link";
import Modal from "../_components/Modal";
import ApplicationForm from "../_components/ApplicationForm";

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
  searchParams: { show },
}: {
  params: { id: string };
  searchParams: { show: string };
}) {
  const showModal = show;
  const quest: Quest = await getQuestById(id);
  if (!quest) {
    notFound();
  }

  const { coverImg } = quest;

  return (
    <>
      <div
        className="bg-scroll h-screen bg-cover bg-center text-textWhite pt-[150px]"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.3)), url(/${coverImg})`,
        }}
      >
        <div className="container mx-auto flex justify-end ">
          <div className="w-2/4 flex-col">
            <QuestInfo quest={quest} />
            <Link
              href={`${id}?show=true`}
              className="uppercase bg-brandOrange py-[22px] px-12 text-white text-lg font-bold rounded-full ml-[30px] block text-center mt-10 w-[250px]"
            >
              Забронювати
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal questId={id}>
          <ApplicationForm questId={id} />
        </Modal>
      )}
    </>
  );
}
