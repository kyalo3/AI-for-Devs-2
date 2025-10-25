"use client"
import React from "react";
import PollCard from "@/components/poll/PollCard";
import type { Poll } from "@/types/poll";

type Props = { polls: Poll[] };

export default function PollList({ polls }: Props) {
  if (!polls || polls.length === 0) {
    return <p className="text-sm text-muted-foreground">No polls yet.</p>;
  }

  return (
    <div className="grid gap-4">
      {polls.map((p) => (
        <PollCard key={p.id} id={p.id} title={p.title} votes={p.votes ?? 0} />
      ))}
    </div>
  );
}
