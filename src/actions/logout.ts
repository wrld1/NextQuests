"use server";

import { deleteSession } from "@/lib/api/session";
import { redirect } from "next/navigation";

export async function logout() {
  deleteSession();
  redirect("/");
}
