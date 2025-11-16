"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center flex-col  justify-center">
      <h2 className="mb-5 text-3xl font-bold">Произошла ошибка!</h2>
      <button
        className="bg-primary-500 text-white py-3 px-6 rounded-2xl cursor-pointer transition-all ease-linear duration-200 active:bg-primary-600 active:scale-95 "
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Попробовать ещё раз
      </button>
    </div>
  );
}
