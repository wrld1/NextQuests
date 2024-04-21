"use server";

export async function getQuestById(id: string) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/detailed-quest/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
