"use client"
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PollCreateForm() {
  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [touched, setTouched] = useState({ title: false, option1: false, option2: false });

  const trimmedTitle = title.trim();
  const trimmedOptions = [option1.trim(), option2.trim()];

  const validation = useMemo(() => {
    const errors: { title?: string; options?: string } = {};

    if (!trimmedTitle) errors.title = "Question is required";

    const nonEmptyOptions = trimmedOptions.filter((o) => o.length > 0);
    if (nonEmptyOptions.length < 2) {
      errors.options = "Please provide at least two options";
    } else {
      // check duplicates
      const set = new Set(nonEmptyOptions.map((o) => o.toLowerCase()));
      if (set.size !== nonEmptyOptions.length) {
        errors.options = "Options must be unique";
      }
    }

    return { errors, valid: Object.keys(errors).length === 0 };
  }, [trimmedTitle, trimmedOptions]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ title: true, option1: true, option2: true });
    setMessage(null);

    if (!validation.valid) {
      setMessage("Please fix validation errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/polls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmedTitle, options: trimmedOptions.filter(Boolean) }),
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
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4" noValidate>
      <div>
        <label className="block text-sm font-medium">Question</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, title: true }))}
          placeholder="Your poll question"
          aria-invalid={!!validation.errors.title}
        />
        {touched.title && validation.errors.title && (
          <p className="text-sm text-red-600 mt-1">{validation.errors.title}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Option 1</label>
        <Input
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, option1: true }))}
          placeholder="Option 1"
          aria-invalid={!!validation.errors.options}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Option 2</label>
        <Input
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, option2: true }))}
          placeholder="Option 2"
          aria-invalid={!!validation.errors.options}
        />
        {(touched.option1 || touched.option2) && validation.errors.options && (
          <p className="text-sm text-red-600 mt-1">{validation.errors.options}</p>
        )}
      </div>

      <div>
        <Button type="submit" disabled={loading || !validation.valid}>
          {loading ? "Creating..." : "Create poll"}
        </Button>
      </div>

      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  );
}
