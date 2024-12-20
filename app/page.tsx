import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Menu, PieChart, Tags, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <header className="border-b border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-medium">
            SpendSense
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-neutral-500 hover:text-neutral-200 transition-colors"
            >
              <Button variant={"link"}>Sign Up</Button>
            </Link>
            <Button
              variant="outline"
              className="text-sm h-8 px-4 bg-transparent border-neutral-800 text-neutral-200 hover:border-neutral-700 hover:bg-transparent hover:text-white transition-all"
            >
              Sign In
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <div className="max-w-[1024px] mx-auto space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-none text-white">
              SpendSense
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl lg:text-2xl max-w-[600px] mx-auto">
              Your wallet needs a brain too—track, analyze, and optimize your
              expenses with ease.
            </p>
            <div className="w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="h-10 px-8 bg-white text-black hover:bg-neutral-200 transition-colors font-medium text-base sm:text-lg w-full sm:w-auto">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <div
          id="features"
          className="container mx-auto px-4 sm:px-6 py-24 sm:py-32"
        >
          <div className="max-w-[1024px] mx-auto">
            <div className="border border-neutral-800 rounded-xl overflow-hidden">
              <div className="p-8 sm:p-10 space-y-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-center pb-6 border-b border-neutral-800">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <FeatureCard
                    icon={<Tags className="w-6 h-6" />}
                    title="Expense Categorization"
                    description="Organize spending with predefined and custom categories. Understand your expenses at a glance."
                  />
                  <FeatureCard
                    icon={<PieChart className="w-6 h-6" />}
                    title="Spending Insights"
                    description="Visualize your spending trends with intuitive charts and graphs. Gain clarity on your financial habits."
                  />
                  <FeatureCard
                    icon={<TrendingUp className="w-6 h-6" />}
                    title="Smart Analytics"
                    description="AI-powered insights to help you understand and optimize your spending patterns."
                  />
                  <FeatureCard
                    icon={<Users className="w-6 h-6" />}
                    title="Team Collaboration"
                    description="Share and manage expenses with your team, with granular permissions and roles."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
          <span className="text-sm text-neutral-500 mb-4 sm:mb-0">
            © 2024 SpendSense, Inc.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-200 transition-colors"
            >
              <Button variant={"link"}>Made with ❤️ by Rithvik</Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
