"use server";

export async function getQuests() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/quests`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
