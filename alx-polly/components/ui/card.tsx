import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: Props) {
  return (
    <div className={`p-4 border rounded-md bg-white shadow-sm ${className}`}>{children}</div>
  );
}

export default Card;
