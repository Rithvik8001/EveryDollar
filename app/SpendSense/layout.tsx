"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";
import { CreditCard, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

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
    <div className="flex h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gray-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <Link href="/SpendSense">
              <h1 className="text-2xl font-bold text-gray-800">
                Spend<span className="text-blue-500">Sense</span>
              </h1>
            </Link>
          </div>
          <nav className="flex-grow px-4 py-6">
            <ul className="space-y-4">
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
          <div className="p-4 border-t border-gray-200">
            {user && (
              <div className="flex items-center space-x-3">
                <img
                  src={user.imageUrl}
                  alt={user.fullName || "User"}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-grow">
                  <p className="text-sm font-medium truncate">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <SignOutButton redirectUrl="/">
                    <LogOut
                      className="w- h-5"
                      onClick={() => signOut({ redirectUrl: "/" })}
                    />
                  </SignOutButton>
                </Button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <header className="md:hidden flex justify-between items-center p-4 bg-white border-b border-gray-200">
          <Link href="/SpendSense">
            <h1 className="text-xl font-bold text-gray-800">
              Spend<span className="text-blue-500">Sense</span>
            </h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-white p-4 md:p-8">
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
        className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors p-2 rounded-lg group"
        onClick={onClick}
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </li>
  );
}
