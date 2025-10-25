"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PollCreateForm() {
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/polls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, options: [option1, option2] }),
      });

      if (!res.ok) throw new Error("Failed to create poll");

      setTitle("");
      setOption1("");
      setOption2("");
      setMessage("Poll created (stub). Wire to real backend.");
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <div>
        <label className="block text-sm font-medium">Question</label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Your poll question" />
      </div>

      <div>
        <label className="block text-sm font-medium">Option 1</label>
        <Input value={option1} onChange={(e) => setOption1(e.target.value)} placeholder="Option 1" />
      </div>

      <div>
        <label className="block text-sm font-medium">Option 2</label>
        <Input value={option2} onChange={(e) => setOption2(e.target.value)} placeholder="Option 2" />
      </div>

      <div>
        <Button type="submit" disabled={loading}>{loading ? "Creating..." : "Create poll"}</Button>
      </div>

      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  );
}
