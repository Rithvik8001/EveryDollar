import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#FAFAFA] `}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              aria-label="SpendSense"
              className="flex items-center space-x-2"
            >
              <Logo />
              <span className={` text-lg font-semibold text-gray-900`}>
                SpendSense
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/sign-in"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="group relative inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
              >
                <span className="relative">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-60" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-20 blur-2xl" />
              <h1 className="relative text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight mb-6">
                SpendSense
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 font-medium">
              Your wallet needs a brain too—track, analyze, and optimize your
              expenses with ease.
            </p>
            <Link
              href="/sign-up"
              className="group relative inline-flex items-center justify-center bg-gray-900 text-white text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 hover:scale-105"
            >
              <span className="mr-2">Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Expense Tracking",
                description:
                  "Automatically categorize and track your expenses with AI-powered insights.",
                icon: "📊",
              },
              {
                title: "Visual Analytics",
                description:
                  "Beautiful, easy-to-understand visual reports of your spending habits.",
                icon: "📈",
              },
              {
                title: "Budget Management",
                description:
                  "Set and manage budgets effortlessly with real-time alerts.",
                icon: "💰",
              },
              {
                title: "Secure & Private",
                description:
                  "Bank-level encryption ensures your financial data stays safe.",
                icon: "🔒",
              },
              {
                title: "Cross-Platform",
                description:
                  "Access your expense data seamlessly across all devices.",
                icon: "🔄",
              },
              {
                title: "Smart Savings",
                description:
                  "Get personalized tips to help you reach your financial goals.",
                icon: "💡",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to take control of your finances?
            </h2>
            <Link
              href="/sign-up"
              className="group relative inline-flex items-center justify-center bg-white text-gray-900 text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
            >
              <span className="mr-2">Start Tracking Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 font-medium">Made with ❤️ by Rithvik</p>
          <p className="text-sm text-gray-500 mt-2">
            &copy; 2024 SpendSense Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
