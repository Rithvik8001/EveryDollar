import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpendSensePage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center overflow-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5 text-center mb-24">
        <h1 className="text-5xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Welcome to SpendSense!
        </h1>
        <h3 className="text-base sm:text-lg text-gray-400">
          Start logging your expenses, and keep track of them to lead a good
          financial life!
        </h3>
        <div>
          <Link href="/SpendSense/expenses" className="block w-full">
            <Button
              variant="outline"
              className="w-1/2 text-md py-6 bg-transparent border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-neutral-800 hover:text-white transition-all"
            >
              Add Expenses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
