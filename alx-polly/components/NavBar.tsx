"use client"
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-semibold">ALX Polly</Link>
          <nav className="hidden md:flex gap-4 text-sm">
            <Link href="/polls" className="text-muted-foreground hover:underline">My Polls</Link>
            <Link href="/polls/create" className="text-muted-foreground hover:underline">Create Poll</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/polls/create">
            <Button>Create Poll</Button>
          </Link>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">U</div>
        </div>
      </div>
    </header>
  );
}
