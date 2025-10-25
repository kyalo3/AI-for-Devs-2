"use client"
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <AuthLayout title="Create account">
      <AuthForm mode="register" />
      <p className="mt-6 text-sm text-muted-foreground">Register placeholder — wire up your user creation flow here.</p>
    </AuthLayout>
  );
}
