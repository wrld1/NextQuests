import { ZodIssue } from "zod";

export const findErrors = (fieldName: string, errors: ZodIssue[] | string) => {
  if (typeof errors === "string") {
    return [];
  }
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};
