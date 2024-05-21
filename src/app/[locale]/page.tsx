import initTranslations from "@/app/i18n";
import Link from "next/link";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <>
      <section className="flex container mx-auto gap-12 py-[120px] px-60 justify-center">
        <div className="flex flex-col gap-7 items-center w-full">
          <h2 className="font-bold text-4xl text-textWhite">{t("heading")}</h2>

          <p className="text-xl text-center text=[#707C87]">
            {t("subheading")}
          </p>
          <Link
            href="/quests"
            className="bg-brandOrange rounded-md p-2 text-center"
          >
            {t("actionButtonText")}
          </Link>
        </div>
      </section>
    </>
  );
}
