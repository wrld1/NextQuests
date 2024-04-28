import Link from "next/link";
import { X } from "react-feather";

type ModalProps = {
  questId: string;
  children: React.ReactNode;
};

function Modal({ questId, children }: ModalProps) {
  return (
    <div className="fixed z-50 top-0 flex justify-center items-center min-w-full min-h-full bg-darkTransparentBackground bg-opacity-80">
      <div className="bg-formsBackground p-8 shadow-lg rounded-md z-50 ">
        <div className="text-center">
          <div className="flex justify-between">
            <h3 className="text-3xl font-extrabold text-textWhite mb-10">
              Залишити заявку
            </h3>
            <Link
              href={`${questId}`}
              className="text-textWhite text-base font-medium shadow-sm"
            >
              <X />
            </Link>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
