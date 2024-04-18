import { useFormStatus } from "react-dom";

function SubmitButton({ placeholder }: { placeholder: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="uppercase bg-brandOrange py-4 px-8 text-white text-sm font-extrabold rounded-full block text-center mx-auto mb-6 disabled:bg-[#B8B8B8] disabled:cursor-not-allowed"
    >
      {pending ? "Відправлення..." : placeholder}
    </button>
  );
}

export default SubmitButton;
