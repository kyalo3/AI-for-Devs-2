import React from "react";

type Props = { children: React.ReactNode; title?: string };

export default function AuthLayout({ children, title = "Authenticate" }: Props) {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div>{children}</div>
    </main>
  );
}
