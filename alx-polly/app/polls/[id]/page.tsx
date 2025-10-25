import React from "react";

type Props = { params: { id: string } };

export default async function PollPage({ params }: Props) {
  const { id } = params;
  // Placeholder: fetch poll by id from API
  const poll = {
    id,
    title: "Sample poll title",
    options: [
      { id: "a", label: "Option A", votes: 10 },
      { id: "b", label: "Option B", votes: 7 },
    ],
  };

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{poll.title}</h1>
      <ul className="space-y-3">
        {poll.options.map((o) => (
          <li key={o.id} className="flex items-center justify-between">
            <span>{o.label}</span>
            <span className="font-medium">{o.votes} votes</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted-foreground">This is a placeholder poll view. Implement voting and live updates.</p>
    </main>
  );
}
