"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BadgeDollarSignIcon } from "lucide-react";

export default function SpendSenseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-full p-4 flex flex-wrap justify-between items-center border-b">
        <div className="flex items-center w-full sm:w-auto justify-between">
          <h1 className="font-extrabold text-3xl sm:text-4xl flex">
            <Link href={"/SpendSense"}>EveryDollar</Link>
            <BadgeDollarSignIcon />
          </h1>
          <button
            className="sm:hidden"
            onClick={() =>
              document.getElementById("navMenu")?.classList.toggle("hidden")
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul
          id="navMenu"
          className="hidden sm:flex flex-col sm:flex-row w-full sm:w-auto mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <li className="w-full sm:w-auto">
            <Link href={"/SpendSense/expenses"} className="w-full">
              <Button variant={"default"} className="w-full sm:w-auto">
                Expenses
              </Button>
            </Link>
          </li>
          <li className="w-full sm:w-auto">
            <Link href={"/SpendSense/dashboard"} className="w-full">
              <Button variant={"outline"} className="w-full sm:w-auto">
                Dashboard
              </Button>
            </Link>
          </li>
          <li className="flex justify-center sm:justify-start">
            {user && (
              <img
                className="rounded-full w-9 h-9"
                src={user.imageUrl}
                alt="User avatar"
              />
            )}
          </li>
        </ul>
      </nav>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
