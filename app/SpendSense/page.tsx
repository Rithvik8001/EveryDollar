import { Button } from "@/components/ui/button";
import { BadgeDollarSign } from "lucide-react";
import Link from "next/link";

export default function SpendSensePage() {
  return (
    <div className="min-h-[calc(100vh-73px)] flex flex-col justify-center items-center p-4 bg-gradient-to-r from-purple-100 to-sky-50">
      <div className="text-center space-y-3 max-w-2xl w-full ">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-800 flex items-center justify-center">
          Welcome to EveryDollar
          <BadgeDollarSign className="w-8 h-8" />
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
          Your wallet needs a brain too—track, analyze, and optimize your
          expenses with ease.
        </p>
        <Link href="/SpendSense/expenses" className="block">
          <Button
            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-105"
            variant="default"
          >
            Log Expenses!
          </Button>
        </Link>
      </div>
    </div>
  );
}
