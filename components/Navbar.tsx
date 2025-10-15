"use client";

import Link from "next/link";
//import { useSession } from "next-auth/react";
import { LogIn, LogOut, Briefcase } from "lucide-react";
import { signOut } from "@/auth";

export default function Navbar() {
  //const { data: session } = useSession();
    const session = null; // Replace with actual session logic

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link href="/" className="flex items-center gap-2 text-xl text-black font-semibold">
        <Briefcase className="w-6 h-6 text-blue-600" />
        JobPortal
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
        <Link href="/post" className="text-gray-700 hover:text-blue-600">Post Job</Link>

        {session ? (
          <>
            <span className="text-gray-600">{session.user?.name}</span>
            
            
            <button
              onClick={signOut}
              className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </>
        ) : (
        <Link href="/auth/signin" className="text-gray-700 hover:text-blue-600">
          <button
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <LogIn className="w-4 h-4" /> Sign in
          </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
