import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border border-neutral-800 rounded-xl p-6 space-y-4 hover:border-neutral-700 transition-colors">
      <div className="text-white">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>
      <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
