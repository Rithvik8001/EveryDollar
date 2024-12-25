import { SignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function SignInPage() {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    redirect("/dashboard");
  }

  return <SignIn />;
}
