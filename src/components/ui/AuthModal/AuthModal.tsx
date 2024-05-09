"use client";

import { useRouter } from "next/navigation";
import { X } from "react-feather";

type AuthModalProps = {
  children: React.ReactNode;
};

function AuthModal({ children }: AuthModalProps) {
  const router = useRouter();

  return (
    <div className="fixed z-50 top-0 flex justify-center items-center min-w-full min-h-full bg-darkTransparentBackground bg-opacity-80">
      <div className="bg-formsBackground p-8 shadow-lg rounded-md z-50 ">
        <div className="text-center">
          <div className="flex justify-end">
            <button
              onClick={() => {
                router.back();
              }}
            >
              <X className="text-white" />
            </button>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
