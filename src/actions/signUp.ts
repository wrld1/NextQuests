"use server";

import { createSession } from "@/lib/api/session";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export async function signUp(prevState: any, formData: FormData) {
  const parse = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      success: false,
      message: parse.error.issues,
    };
  }

  const data = parse.data;

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/api/auth/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    const user = await res.json();
    await createSession(user.id);

    return {
      success: true,
      message: `Ви успішно зареєструвались!`,
    };
  } catch (e: any) {
    return { success: false, message: e.message };
  }
}
