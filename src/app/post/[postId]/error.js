"use client";

// import { LoginButton } from "@/components/LoginButton";

export default function ErrorPage({ error, reset }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <h1 className="text-6xl text-red-600">Error</h1>
      <p>
        This page is restricted unless you sign-up or sign in, Please create an
        account and log in.
      </p>
      <a href="/">Go Back Home</a>
    </main>
  );
}
