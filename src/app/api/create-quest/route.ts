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

  if (
    ![
      title,
      description,
      previewImg,
      coverImg,
      type,
      level,
      peopleCount,
      duration,
    ].every(Boolean)
  ) {
    return NextResponse.json(
      { message: "Введіть дані у всі поля" },
      {
        status: 400,
      }
    );
  }

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

  if (!quest) {
    return NextResponse.json(
      { message: "Виникла помилка при створенні квесту" },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(quest, { status: 201 });
}
