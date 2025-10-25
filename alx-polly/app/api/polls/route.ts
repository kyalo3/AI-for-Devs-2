import { NextResponse } from "next/server";
import type { Poll } from "@/types/poll";
import { fetchPolls, createPoll } from "@/lib/db";

export async function GET() {
  const polls: Poll[] = await fetchPolls();
  return NextResponse.json(polls);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, options } = body;
    if (!title) {
      return NextResponse.json({ error: "title is required" }, { status: 400 });
    }

    const poll = await createPoll({ title, options });
    return NextResponse.json(poll, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
