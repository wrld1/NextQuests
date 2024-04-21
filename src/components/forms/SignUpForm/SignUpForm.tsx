"use client";

import { useFormState } from "react-dom";
import FormInput from "@/components/ui/FormInput";
import SubmitButton from "@/components/ui/SubmitButton";
import { findErrors } from "@/lib/findErrors";
import ErrorMessages from "@/components/ui/ErrorMessages";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signUp } from "@/actions/signUp";
import { handleFormError } from "@/lib/handleFormError";
import { formInitialState } from "@/constants/formInitialState";
import { useRef } from "react";

function SignUpForm() {
  const [state, formAction] = useFormState(signUp, formInitialState);
  const toastShownRef = useRef(false);

  const router = useRouter();

  const emailErrors = findErrors("email", state.message);
  const passwordErrors = findErrors("password", state.message);

  function handleSuccess(message: string) {
    if (!toastShownRef.current) {
      toast.success(message);
      toastShownRef.current = true;
    }
    router.push("/");
  }

  return (
    <form action={formAction}>
      {state?.success && <>{handleSuccess(state.message)}</>}
      {state.success === false && <>{handleFormError(state.message)}</>}
      <h3 className="font-bold text-xl mb-2 text-center">Реєстрація</h3>
      <div className="flex flex-col gap-8 mb-14 ">
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

export default SignUpForm;
