import AuthModal from "@/components/ui/AuthModal";
import SignInForm from "@/components/forms/SignInForm";

export default function Page() {
  return (
    <AuthModal>
      <SignInForm />
    </AuthModal>
  );
}
