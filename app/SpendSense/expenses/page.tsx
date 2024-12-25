"use client";

import { useState, FormEvent, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFinanceStore } from "@/lib/store";

type Transaction = {
  id: string;
  type: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
};

export default function ExpensesPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const {
    transactions,
    addTransaction,
    budget,
    setBudget,
    fetchTransactions,
    isLoading,
    error,
  } = useFinanceStore();
  const [radio, setRadio] = useState<string>("expense");
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [newBudget, setNewBudget] = useState<string>(budget.toString());

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchTransactions();
    }
  }, [isLoaded, isSignedIn, fetchTransactions]);

  if (!isLoaded || isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Please sign in to manage your expenses.</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!category || amount === "" || !description || !date) {
      alert("Please provide all the details");
      return;
    }
    const newTransaction: Omit<Transaction, "id"> = {
      type: radio,
      amount: parseFloat(amount),
      description,
      category,
      date,
    };
    await addTransaction(newTransaction);
    setAmount("");
    setDescription("");
    setCategory("");
    setDate(undefined);
  };

  const handleBudgetSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const budgetValue = parseFloat(newBudget);
    if (!isNaN(budgetValue) && budgetValue >= 0) {
      await setBudget(budgetValue);
      alert(`Budget set to $${budgetValue.toFixed(2)}`);
    } else {
      alert("Please enter a valid budget amount");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Finances</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-gray-50 py-3">
            <CardTitle className="text-sm font-medium text-gray-800">
              Set Monthly Budget
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleBudgetSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Budget</Label>
                <Input
                  type="number"
                  id="budget"
                  defaultValue={budget.toString()}
                  onChange={(e) => setNewBudget(e.target.value)}
                  placeholder="Enter your monthly budget"
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                variant="default"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Set Budget
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
          <CardHeader className="bg-gray-50 py-3">
            <CardTitle className="text-sm font-medium text-gray-800">
              Add Transaction
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={submitForm} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-md">Transaction Type</Label>
                <RadioGroup
                  value={radio}
                  onValueChange={(value: string) => {
                    setRadio(value);
                  }}
                  className="flex space-x-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expense" id="expense" />
                    <Label htmlFor="expense">Expense</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="income" id="income" />
                    <Label htmlFor="income">Income</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  type="number"
                  id="amount"
                  placeholder="Enter the Amount"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  type="text"
                  id="description"
                  placeholder="Enter the Description"
                  className="w-full"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(value: string) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="transport">Transport</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="salary">Salary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <DatePicker date={date} setDate={setDate} />
              </div>
              <div className="space-y-2">
                <Button
                  type="submit"
                  variant={"default"}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Add Transaction
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
        <CardHeader className="bg-gray-50 py-3">
          <CardTitle className="text-sm font-medium text-gray-800">
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      {transaction.date.toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
