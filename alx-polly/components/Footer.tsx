import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ALX Polly. All rights reserved.
      </div>
    </footer>
  );
}
