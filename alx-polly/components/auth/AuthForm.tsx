"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = { mode?: "login" | "register" };

export default function AuthForm({ mode = "login" }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: wire to NextAuth / Clerk / custom API
    alert(`${mode} submitted (placeholder) - email=${email}`);
  }

  return (
    <form className="max-w-md space-y-4" onSubmit={onSubmit}>
      {mode === "register" && (
        <div>
          <label className="block text-sm font-medium">Name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Email</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
      </div>

      <div>
        <Button type="submit">{mode === "login" ? "Sign in" : "Create account"}</Button>
      </div>
    </form>
  );
}
