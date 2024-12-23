import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SpendSensePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sm:max-w-3xl max-w-lg w-full mx-auto">
        <div className="sm:mt-36 mt-32 overflow-hidden">
          <Card className="p-24 rounded-xl flex flex-col space-y-2">
            <CardTitle className="text-4xl font-bold text-center">
              Welcome to SpendSense!
            </CardTitle>
            <CardDescription className="pl-8 text-md text-neutral-500 text-center">
              This is your hub for a healthy finalcial life!
            </CardDescription>
            <Link className="w-full flex" href={"/SpendSense/expenses"}>
              <Button className="w-1/2 mx-auto font-bold" variant={"default"}>
                Log Expenses!
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
