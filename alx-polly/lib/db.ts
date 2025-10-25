/**
 * Small placeholder DB helper. Replace with real DB integration (Prisma, Supabase, etc.)
 */
import type { Poll } from "@/types/poll";

const SAMPLE_POLLS: Poll[] = [
  { id: "1", title: "Which framework do you prefer?", votes: 42, options: ["React", "Vue"] },
  { id: "2", title: "Favorite database?", votes: 13, options: ["Postgres", "Mongo"] },
];

export async function fetchPolls(): Promise<Poll[]> {
  // placeholder: in real app fetch from DB
  return Promise.resolve(SAMPLE_POLLS);
}

export async function createPoll(payload: { title: string; options?: string[] }): Promise<Poll> {
  const newPoll: Poll = {
    id: String(Date.now()),
    title: payload.title,
    options: payload.options ?? [],
    votes: 0,
  };
  // placeholder: persist to DB
  SAMPLE_POLLS.push(newPoll);
  return Promise.resolve(newPoll);
}
