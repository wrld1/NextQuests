"use client";

import { useFormState } from "react-dom";
import { createOrder } from "@/app/actions/createOrder";
import FormInput from "@/components/FormInput";
import SubmitButton from "@/components/SubmitButton";
import { findErrors } from "@/lib/findErrors";
import ErrorMessages from "@/components/ErrorMessages";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ZodIssue } from "zod";

function RegisterForm() {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useFormState(createOrder, initialState);

  const router = useRouter();

  const emailErrors = findErrors("email", state.message);
  const passwordErrors = findErrors("password", state.message);

  // function handleSuccess(message: string | ZodIssue[]) {
  //   if (typeof message === "string") {
  //     toast.success(message);
  //     router.back();
  //   }
  //   return;
  // }

  return (
    <form action={formAction}>
      {/* {state?.success && <>{handleSuccess(state.message)}</>} */}
      <div className="flex flex-col gap-8 mb-14">
        <div>
          <FormInput
            inputId={"email"}
            inputLabel={"Email"}
            type={"email"}
            required={true}
            placeholder={"Ваш email"}
          />
          <ErrorMessages errors={emailErrors} />
        </div>
        <div>
          <FormInput
            inputId={"password"}
            inputLabel={"Пароль"}
            type={"password"}
            required={true}
            placeholder={"Ваш пароль"}
          />
          <ErrorMessages errors={passwordErrors} />
        </div>
      </div>
      <SubmitButton placeholder="Зареєструватись" />
      <p aria-live="polite" className="sr-only" role="status">
        {state.message === "string" ? state.message : ""}
      </p>
    </form>
  );
}

export default RegisterForm;
