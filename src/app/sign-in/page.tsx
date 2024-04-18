import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

function LoginPage() {
  return (
    <>
      <RegisterForm />
      <div>
        <Link href="/">Повернутися на головну</Link>
      </div>
    </>
  );
}

export default LoginPage;
