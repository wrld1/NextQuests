import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const quest = await db.quest.findUnique({
    where: {
      id: +id,
    },
  });

  return NextResponse.json(quest, { status: 200 });
}
