import SignInForm from "@/components/forms/SignInForm";
import ReturnBackButton from "@/components/ui/ReturnBackButton";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen container mx-auto">
      <div className="flex justify-start w-full">
        <ReturnBackButton />
      </div>
      <SignInForm />
      <div className="flex justify-start">
        <Link
          href="/sign-in"
          className=" p-2 rounded-md font-semibold text-md underline text-brandOrange"
        >
          Ще не зареєстровані?
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
