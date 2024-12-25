"use client";

import { useEffect } from "react";
import { useFinanceStore } from "@/lib/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Activity } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const {
    totalIncome,
    totalExpenses,
    transactions,
    budget,
    remainingBalance,
    fetchTransactions,
    isLoading,
    error,
  } = useFinanceStore();

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      fetchTransactions(user.id);
    }
  }, [isLoaded, isSignedIn, user?.id, fetchTransactions]);

  if (!isLoaded || isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Please sign in to view your dashboard.</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const chartData = [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpenses },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Financial Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-green-50 py-3">
            <CardTitle className="text-sm font-medium text-green-800 flex items-center">
              <ArrowUpIcon className="w-4 h-4 mr-2" />
              Total Income
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-green-600">
              ${totalIncome.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-red-50 py-3">
            <CardTitle className="text-sm font-medium text-red-800 flex items-center">
              <ArrowDownIcon className="w-4 h-4 mr-2" />
              Total Expenses
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-red-600">
              ${totalExpenses.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-blue-50 py-3">
            <CardTitle className="text-sm font-medium text-blue-800 flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              Remaining Balance
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-blue-600">
              ${remainingBalance.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-purple-50 py-3">
            <CardTitle className="text-sm font-medium text-purple-800 flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              Total Budget
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-2xl font-bold text-purple-600">
              ${budget.toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-gray-50 py-3">
            <CardTitle className="text-sm font-medium text-gray-800">
              Income vs Expenses
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-gray-50 py-3">
            <CardTitle className="text-sm font-medium text-gray-800">
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {transactions
                .slice(-5)
                .reverse()
                .map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-gray-800">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.date.toLocaleDateString()}
                      </p>
                    </div>
                    <div
                      className={`font-semibold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
