import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const existingUser = await db.user.findFirst({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Користувач з цією поштою вже існує" },
      {
        status: 400,
      }
    );
  }

  const user = await db.user.create({
    data: {
      email,
      password,
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Виникла помилка при створенні акаунту" },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(user, { status: 201 });
}
