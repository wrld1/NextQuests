import Link from "next/link";

function ReturnBackButton() {
  return (
    <Link
      href="/"
      className="p-2 bg-slate-400/20 rounded-md font-semibold text-md hover:bg-brandOrange/80"
    >
      Повернутися на головну
    </Link>
  );
}

export default ReturnBackButton;
