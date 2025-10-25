"use client"
import React from "react";
import PollCreateForm from "@/components/poll/PollCreateForm";

export default function CreatePollPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create poll</h1>
      <PollCreateForm />
      <p className="mt-6 text-sm text-muted-foreground">Placeholder create poll form — add validation and API wiring.</p>
    </main>
  );
}
