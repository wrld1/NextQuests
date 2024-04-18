import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    title,
    description,
    previewImg,
    coverImg,
    type,
    level,
    peopleCount,
    duration,
  } = body;

  const quest = await db.quest.create({
    data: {
      title,
      description,
      previewImg,
      coverImg,
      type,
      level,
      peopleCount,
      duration,
    },
  });

  return NextResponse.json(quest, { status: 201 });
}
