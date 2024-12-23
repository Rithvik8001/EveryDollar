import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowDownIcon, ArrowUpIcon, WalletIcon } from "lucide-react";

export default function DashboardPage() {
  // Mock data - replace with actual data fetching logic
  const expenses = 2500;
  const income = 5000;
  const remainingBalance = income - expenses;

  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl text-center sm:text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">
            Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Income
                </CardTitle>
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  ${income.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +20% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Expenses
                </CardTitle>
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  ${expenses.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Remaining Balance
                </CardTitle>
                <WalletIcon className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  ${remainingBalance.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +15% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Recent Transactions
                </CardTitle>
                <CardDescription>Your last 5 transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Grocery Shopping",
                      amount: -120,
                      date: "2023-04-15",
                    },
                    {
                      name: "Salary Deposit",
                      amount: 3000,
                      date: "2023-04-01",
                    },
                    { name: "Electric Bill", amount: -80, date: "2023-04-10" },
                    { name: "Freelance Work", amount: 500, date: "2023-04-08" },
                    {
                      name: "Restaurant Dinner",
                      amount: -65,
                      date: "2023-04-13",
                    },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium">{transaction.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {transaction.date}
                        </p>
                      </div>
                      <div
                        className={`font-extrabold ${
                          transaction.amount > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}
                        {transaction.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
