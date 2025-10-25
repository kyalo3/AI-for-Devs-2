"use client"
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string };

/**
 * Lightweight Button wrapper. Replace implementation with shadcn-ui `button` when available.
 */
export function Button({ children, className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={`inline-flex items-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
