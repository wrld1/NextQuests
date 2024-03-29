import { ZodIssue } from "zod";

export const findErrors = (fieldName: string, errors: ZodIssue[] | string) => {
  if (typeof errors === "string") {
    // If errors is a string, return an empty array
    return [];
  }
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};
