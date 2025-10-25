import React from "react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";
import type { Poll } from "@/types/poll";

type Props = Poll;

export default function PollCard({ id, title, votes = 0, options = [] }: Props) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{options.length} options · {votes} total votes</p>
          <p className="text-xs text-muted-foreground">Created on 10/15/2023</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Link href={`/polls/${id}`}>
            <Button>View</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
