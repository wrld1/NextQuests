import Link from "next/link";

type AuthModalProps = {
  children: React.ReactNode;
};

function AuthModal({ children }: AuthModalProps) {
  return (
    <div className="fixed z-50 top-0 flex justify-center items-center min-w-full min-h-full bg-[#3D3333] bg-opacity-80">
      <div className="bg-[#141414] p-8 shadow-lg rounded-md z-50 ">
        <div className="text-center">
          <div className="">{children}</div>
          <Link href="/" className="bg-white text-black p-2 ">
            Close modal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
