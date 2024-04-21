import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const user = await db.user.findFirst({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Невірний email" },
      {
        status: 401,
      }
    );
  }

  const passwordMatch = password === user.password;

  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Невірний пароль" },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json(user, {
    status: 200,
  });
}
