import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-[74px]">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="bg-brandOrange p-2">
        Return Home
      </Link>
    </div>
  );
}
