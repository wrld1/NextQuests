import { RefObject } from "react";
import toast from "react-hot-toast";
import { ZodIssue } from "zod";

export function handleFormError(
  message: string | ZodIssue[],
  toastShownRef?: React.Ref<boolean>
) {
  if (typeof message === "string" && message) {
    if (!(toastShownRef as RefObject<boolean>).current) {
      toast.error(message);
    }
  }
  return;
}
