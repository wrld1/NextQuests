import SignUpForm from "@/components/forms/SignUpForm";
import ReturnBackButton from "@/components/ui/ReturnBackButton";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen container mx-auto">
      <div className="flex justify-start w-full">
        <ReturnBackButton />
      </div>
      <SignUpForm />
      <div className="flex justify-start">
        <Link
          href="/sign-in"
          className=" p-2 rounded-md font-semibold text-md underline text-brandOrange"
        >
          Вже зареєстровані?
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
