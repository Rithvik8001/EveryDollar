import { Card, CardContent } from "@/components/ui/card";

export default function ExpensesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sm:p-6 p-4">
        <div className="max-w-3xl w-full mx-auto">
          <div className="grid grid-cols-1">
            <Card>
              <CardContent></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
