"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  peopleCount: z.number().positive(),
  phone: z.string().min(1),
  isLegal: z.boolean(),
});

export async function createOrder(prevState: any, formData: FormData) {
  const parse = schema.safeParse({
    name: formData.get("name"),
    peopleCount: formData.get("peopleCount"),
    phone: formData.get("phone"),
    isLegal: formData.get("isLegal"),
  });

  if (!parse.success) {
    return {
      errors: parse.error.flatten().fieldErrors,
    };
  }

  const data = parse.data;

  try {
    revalidatePath("/orders");
    return {
      message: `Нове замовлення від ${data.name} на ${data.peopleCount} осіб прийнято!`,
    };
  } catch (e) {
    throw new Error("Failed to create order");
  }
}
