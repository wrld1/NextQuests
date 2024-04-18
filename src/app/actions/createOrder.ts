"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name cannot be blank"),
  phone: z.string().length(10, "Phone number cannot be longer than 10 digits"),
  peopleCount: z.number().positive("Must be 1 or more"),
  isLegal: z
    .boolean()
    .refine((value) => value === true, "Please agree to the terms."),
});

export async function createOrder(prevState: any, formData: FormData) {
  const parse = schema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    peopleCount: Number(formData.get("peopleCount")),
    isLegal: formData.get("isLegal") === "true",
  });

  if (!parse.success) {
    return {
      success: false,
      message: parse.error.issues,
    };
  }

  const data = parse.data;

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const order = await res.json();

    return {
      success: true,
      message: `Заявка від ${data.name}  для ${data.peopleCount} осіб(-оби) прийнято`,
    };
  } catch (e: any) {
    console.error(e);
    return { success: false, message: "Не вийшло створити заявку" };
  }
}
