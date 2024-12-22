"use client";

import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";
import { CreditCard, LayoutDashboard, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SpendSenseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      {/* Mobile header */}
      <header className="md:hidden flex justify-between items-center p-4 border-b border-neutral-800">
        <Link href={"/SpendSense"}>
          <h1 className="text-xl font-extrabold text-center">SpendSense</h1>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-white"
        >
          <Menu />
        </Button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block md:w-64 flex-shrink-0 flex flex-col border-r border-neutral-800`}
      >
        <div className="p-4 border-b border-neutral-800 hidden md:block">
          <Link href={"/SpendSense"}>
            <h1 className="text-xl font-bold">SpendSense</h1>
          </Link>
        </div>
        <nav className="flex-grow p-3">
          <div className="mb-6">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/SpendSense/expenses"
                  className="flex items-center text-neutral-300 hover:text-white transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Button
                    variant="link"
                    className="text-sm h-8 px-4 bg-transparent border-neutral-800 text-neutral-200 hover:border-neutral-700 hover:bg-transparent hover:text-white transition-all"
                  >
                    <CreditCard className="w-5 h-5 mr-3" />
                    <h3 className="text-xl">Expenses</h3>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/SpendSense/dashboard"
                  className="flex items-center text-neutral-300 hover:text-white transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Button
                    variant="link"
                    className="text-sm h-8 px-4 bg-transparent border-neutral-800 text-neutral-200 hover:border-neutral-700 hover:bg-transparent hover:text-white transition-all"
                  >
                    <LayoutDashboard className="w-5 h-5 mr-3" />
                    <h3 className="text-xl">Dashboard</h3>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-4 border-t border-neutral-800">
          {user && (
            <div className="flex items-center">
              <img
                src={user.imageUrl}
                alt={user.fullName || "User"}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div className="flex-grow">
                <p className="text-sm font-medium">{user.fullName}</p>
                <p className="text-xs text-neutral-500">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <button className="text-neutral-500 hover:text-white transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-4 md:p-8 overflow-auto">{children}</main>
    </div>
  );
}
