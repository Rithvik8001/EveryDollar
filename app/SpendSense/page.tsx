import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpendSensePage() {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-500">SpendSense</span>
        </h1>
        <p className="text-xl text-gray-600">
          Track your expenses, gain insights, and take control of your financial
          life.
        </p>
        <div className="pt-4">
          <Link href="/SpendSense/expenses" className="block w-full">
            <Button className="w-full text-lg py-6 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Start Tracking Expenses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
