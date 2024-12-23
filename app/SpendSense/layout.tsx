"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";
import { CreditCard, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import { BadgeDollarSign } from "lucide-react";

export default function SpendSenseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const { signOut } = useClerk();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-neutral-100 text-gray-900">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-80 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl rounded-r-xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-700">
            <Link href="/SpendSense">
              <h1 className="text-3xl font-bold">
                Spend<span className="text-blue-400">Sense</span>
              </h1>
            </Link>
          </div>
          <nav className="flex-grow px-6 py-6">
            <ul className="space-y-6">
              <NavItem
                href="/SpendSense/expenses"
                icon={CreditCard}
                label="Expenses"
                onClick={() => setIsSidebarOpen(false)}
              />
              <NavItem
                href="/SpendSense/dashboard"
                icon={LayoutDashboard}
                label="Dashboard"
                onClick={() => setIsSidebarOpen(false)}
              />
            </ul>
          </nav>
          <div className="p-6 border-t border-gray-700">
            {user && (
              <div className="flex items-center space-x-4">
                <img
                  src={user.imageUrl}
                  alt={user.fullName || "User"}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-md"
                />
                <div className="flex-grow">
                  <p className="text-sm font-semibold truncate">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
                <SignOutButton redirectUrl="/">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white"
                    onClick={() => signOut({ redirectUrl: "/" })}
                  >
                    <LogOut className="w-5 h-5" />
                  </Button>
                </SignOutButton>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden flex justify-between items-center p-4 bg-white shadow-md">
          <Link href="/SpendSense">
            <h1 className="text-2xl font-bold text-gray-800">
              Spend<span className="text-blue-600">Sense</span>
            </h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-neutral-50 p-10 rounded-tl-xl">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  label,
  onClick,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center space-x-4 text-gray-300 hover:text-white hover:bg-gray-700 p-3 rounded-lg transition"
        onClick={onClick}
      >
        <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-600" />
        <span className="text-base font-medium">{label}</span>
      </Link>
    </li>
  );
}
