"use client";

// @ts-ignore
import { useFormState } from "react-dom";
import { createOrder } from "@/app/actions/createOrder";
import FormInput from "../../../components/FormInput";
import SubmitButton from "../../../components/SubmitButton";
import { useState } from "react";
import { findErrors } from "@/lib/findErrors";
import ErrorMessages from "@/components/ErrorMessages";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ZodIssue } from "zod";

function ApplicationForm() {
  const initialState = {
    success: false,
    message: "",
  };
  const [checked, setChecked] = useState(true);
  const [state, formAction] = useFormState(createOrder, initialState);

  const router = useRouter();

  const nameErrors = findErrors("name", state.message);
  const phoneErrors = findErrors("phone", state.message);
  const peopleCountErrors = findErrors("peopleCount", state.message);
  const isLegalErrors = findErrors("isLegal", state.message);

  function handleSuccess(message: string | ZodIssue[]) {
    if (typeof message === "string") {
      toast.success(message);
      router.back();
    }
    return;
  }

  return (
    <form action={formAction}>
      {state?.success && <>{handleSuccess(state.message)}</>}
      <div className="flex flex-col gap-8 mb-14">
        <div>
          <FormInput
            inputId={"name"}
            inputLabel={"Ваше ім'я"}
            type={"text"}
            required={true}
            placeholder={"Ваше ім'я"}
          />
          <ErrorMessages errors={nameErrors} />
        </div>
        <div>
          <FormInput
            inputId={"phone"}
            inputLabel={"Контактний телефон"}
            type={"tel"}
            required={true}
            placeholder={"0663782928"}
          />
          <ErrorMessages errors={phoneErrors} />
        </div>
        <div>
          <FormInput
            inputId={"peopleCount"}
            inputLabel={"Кількість учасників"}
            type={"text"}
            required={true}
            placeholder={"Кількість учасників - 3"}
          />
          <ErrorMessages errors={peopleCountErrors} />
        </div>
      </div>
      <SubmitButton placeholder="Відправити заявку" />
      <p aria-live="polite" className="sr-only" role="status">
        {state.message === "string" ? state.message : ""}
      </p>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="isLegal"
            name="isLegal"
            value={`${checked}`}
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="cursor-pointer"
          />
          <label htmlFor="isLegal" className="text-sm text-textWhite">
            Я згодний з правилами обробки персональних даних
          </label>
        </div>
        <ErrorMessages errors={isLegalErrors} />
      </div>
    </form>
  );
}

export default ApplicationForm;
