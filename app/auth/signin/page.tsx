"use client";

import { login } from "@/lib/auth";
import { Github } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
      <p className="text-gray-600 mb-8">Sign in to continue</p>

      <button
        onClick={login}
        className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800"
      >
        <Github className="w-5 h-5" /> Sign in with GitHub
      </button>
    </div>
  );
}
