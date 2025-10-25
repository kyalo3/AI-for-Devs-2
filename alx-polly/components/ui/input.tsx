"use client"
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Lightweight Input wrapper. Swap with shadcn `Input` when installed.
 */
export function Input(props: Props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border border-gray-300 px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-400"
    />
  );
}

export default Input;
