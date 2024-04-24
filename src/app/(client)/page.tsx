import { verifySession } from "@/lib/api/session";
import Link from "next/link";

export default async function Home() {
  const session = await verifySession();
  return (
    <>
      <section className="flex container mx-auto gap-12 py-[120px] px-60 justify-center">
        <div className="flex flex-col gap-7 w-1/3 items-center">
          <h2 className="font-bold text-4xl text-textWhite">Квести у Києві</h2>
          <p className="text-xl text=[#707C87]">Найцікавіші квести в Україні</p>
          <Link href="/quests" className="bg-brandOrange p-2 text-center">
            До квестів
          </Link>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </section>
    </>
  );
}
