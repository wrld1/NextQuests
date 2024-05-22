import initTranslations from "@/app/i18n";
import Link from "next/link";
import ImageSlider from "@/components/ui/ImageSlider";
import { ArrowRight } from "react-feather";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <>
      <section className="flex container mx-auto gap-12 py-[120px] justify-center h-screen">
        <div className="flex flex-col gap-7 items-center w-full h-full">
          <h2 className="font-bold text-4xl text-textWhite">{t("heading")}</h2>
          <p className="text-xl text-center text=[#707C87]">
            {t("subheading")}
          </p>
          <Link
            href="/quests"
            className="bg-brandOrange rounded-md p-2 text-center text-2xl font-bold flex items-center justify-center gap-2 hover:bg-amber-500 transition-colors"
          >
            <span className="inline-block">{t("actionButtonText")}</span>
            <ArrowRight />
          </Link>
          <ImageSlider />
        </div>
      </section>
    </>
  );
}
