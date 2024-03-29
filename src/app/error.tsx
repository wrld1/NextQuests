"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-[74px] mx-auto h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()} className="bg-brandOrange p-2">
          Try again
        </button>
      </div>
    </div>
  );
}
