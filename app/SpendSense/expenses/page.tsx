import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date.picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup } from "@radix-ui/react-radio-group";

export default function ExpensesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sm:p-6 p-6">
        <div className="max-w-4xl w-full mx-auto">
          <div className="grid grid-cols-1">
            <Card className="overflow-hidden shadow-lg ">
              <div className="p-4 bg-gradient-to-r from-cyan-100 to-orange-100">
                <CardTitle>Add Your Transactions!</CardTitle>
                <CardDescription className="text-md">
                  Please add your Income or Expense.
                </CardDescription>
              </div>
              <CardContent className="p-6">
                <form action="" className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-md">Transaction Type</Label>
                    <RadioGroup
                      defaultValue="expense"
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
                      type="number"
                      id="amount"
                      placeholder="Enter the Amount"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Description</Label>
                    <Input
                      type="text"
                      id="description"
                      placeholder="Enter the Description"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                        <SelectItem value="entertainment">
                          Entertainment
                        </SelectItem>
                        <SelectItem value="salary">Salary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <DatePicker />
                  </div>
                  <div className="space-y-2">
                    <Button variant={"default"} className="w-full">
                      Add Transaction
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
