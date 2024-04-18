import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function GET(request: Request) {
  const quests = await db.quest.findMany();

  return NextResponse.json(quests, { status: 200 });
}
