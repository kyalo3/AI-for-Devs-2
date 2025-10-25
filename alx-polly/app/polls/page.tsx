import React from "react";
import PollList from "@/components/poll/PollList";
import { fetchPolls } from "@/lib/db";

export default async function PollsPage() {
  // For now use the placeholder fetchPolls helper. Replace with real API when ready.
  const polls = await fetchPolls();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">All polls</h1>
      <PollList polls={polls} />
    </main>
  );
}
