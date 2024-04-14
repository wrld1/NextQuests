"use server";

import db from "@/modules/db";

export async function getQuests() {
  // const res = await fetch(`${process.env.API_BASE_URL}/quests`, {
  //   next: { revalidate: 3600 },
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // return res.json();
  return await db.quest.findMany();
}
