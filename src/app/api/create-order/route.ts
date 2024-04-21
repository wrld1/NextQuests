import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, peopleCount, phone, isLegal } = body;

  if (![name, peopleCount, phone, isLegal].every(Boolean)) {
    return NextResponse.json(
      { message: "Введіть дані у всі поля" },
      {
        status: 400,
      }
    );
  }

  const order = await db.order.create({
    data: {
      name,
      peopleCount,
      phone,
      isLegal,
    },
  });

  if (!order) {
    return NextResponse.json(
      { message: "Виникла помилка при створенні заявки" },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(order, { status: 201 });
}
