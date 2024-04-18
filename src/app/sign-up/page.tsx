import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <div>
        <Link href="/">Повернутися на головну</Link>
      </div>
    </>
  );
}

export default RegisterPage;
