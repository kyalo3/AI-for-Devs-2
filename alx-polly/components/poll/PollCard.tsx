import React from "react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

type Props = { id: string; title: string; votes?: number };

export default function PollCard({ id, title, votes = 0 }: Props) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{votes} votes</p>
      </div>
      <div>
        <Button as={"a"} className="" onClick={() => {}}>
          View
        </Button>
      </div>
    </Card>
  );
}
