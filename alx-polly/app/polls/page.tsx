import React from "react";
import PollList from "@/components/poll/PollList";
import { fetchPolls } from "@/lib/db";
import Link from "next/link";

export default async function PollsPage() {
  // For now use the placeholder fetchPolls helper. Replace with real API when ready.
  const polls = await fetchPolls();

  return (
    <main className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Polls</h1>
        <Link href="/polls/create" className="">
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">Create New Poll</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PollList polls={polls} />
      </div>
    </main>
  );
}
