"use client"
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <AuthLayout title="Sign in">
      <AuthForm mode="login" />
      <p className="mt-6 text-sm text-muted-foreground">
        This is a placeholder login page. Hook up your auth provider (NextAuth, Clerk or custom) and form handlers here.
      </p>
    </AuthLayout>
  );
}
