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
    <>
      {polls.map((p) => (
        <PollCard key={p.id} {...p} />
      ))}
    </>
  );
}
