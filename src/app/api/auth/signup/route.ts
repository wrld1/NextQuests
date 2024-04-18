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
      { message: "User with this email already exists" },
      {
        status: 400,
      }
    );
  }

  const order = await db.user.create({
    data: {
      email,
      password,
    },
  });

  return NextResponse.json(order, { status: 201 });
}
