"use client";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { signInWithClerk } from "@/lib/firebase";

function FirebaseAuth() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      signInWithClerk().catch(console.error);
    }
  }, [isSignedIn]);

  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <FirebaseAuth />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
