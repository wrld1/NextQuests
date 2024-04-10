"use client";

// @ts-ignore
import { useFormState } from "react-dom";
import { createOrder } from "@/actions/createOrder";
import ApplicationFormInput from "./ApplicationFormInput";
import SubmitButton from "./SubmitButton";
import { useState } from "react";
import { findErrors } from "@/lib/findErrors";
import { ErrorMessages } from "./ErrorMessages";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function ApplicationForm() {
  const [checked, setChecked] = useState(true);
  const [state, formAction] = useFormState(createOrder, { message: "" });

  const router = useRouter();

  const nameErrors = findErrors("name", state.message);
  const phoneErrors = findErrors("phone", state.message);
  const peopleCountErrors = findErrors("peopleCount", state.message);
  const isLegalErrors = findErrors("isLegal", state.message);

  // function handleSubmit() {
  //   toast.success("Заявка успішно створена");
  //   router.back();
  // }

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-8 mb-14">
        <div>
          <ApplicationFormInput
            inputId={"name"}
            inputLabel={"Ваше ім'я"}
            type={"text"}
            required={true}
            placeholder={"Ваше ім'я"}
          />
          <ErrorMessages errors={nameErrors} />
        </div>
        <div>
          <ApplicationFormInput
            inputId={"phone"}
            inputLabel={"Контактний телефон"}
            type={"tel"}
            required={true}
            placeholder={"0663782928"}
          />
          <ErrorMessages errors={phoneErrors} />
        </div>
        <div>
          <ApplicationFormInput
            inputId={"peopleCount"}
            inputLabel={"Кількість учасників"}
            type={"text"}
            required={true}
            placeholder={"Кількість учасників - 3"}
          />
          <ErrorMessages errors={peopleCountErrors} />
        </div>
      </div>
      <SubmitButton />
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
