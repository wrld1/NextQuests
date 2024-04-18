import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, peopleCount, phone, isLegal } = body;

  const order = await db.order.create({
    data: {
      name,
      peopleCount,
      phone,
      isLegal,
    },
  });

  return NextResponse.json(order, { status: 201 });
}
