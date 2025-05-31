// src/components/home/TrustStats.tsx
import React from 'react';
import { CheckCircle, Navigation, SearchCheck, UserCheck } from 'lucide-react'; // Updated UserCheck for Pet-Friendly, SearchCheck for Detail Focused

interface StatItemProps {
  value: string;
  label: string;
  IconComponent?: React.ElementType;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, IconComponent }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-center">
    {IconComponent && <IconComponent className="mx-auto h-10 w-10 text-blue-600 mb-3" strokeWidth={1.5} />}
    <div className="text-4xl font-bold text-blue-600">{value}</div>
    <div className="text-md text-gray-600 mt-1">{label}</div>
  </div>
);

const TrustStats: React.FC = () => {
  const stats: StatItemProps[] = [
    { value: "1,400+", label: "Past Details*", IconComponent: CheckCircle }, // Clarified this reflects past experience
    { value: "100%", label: "Mobile Service", IconComponent: Navigation },
    { value: "Detail Focused", label: "Approach", IconComponent: SearchCheck }, // New Stat
    { value: "Pet-Friendly", label: "Solutions Offered", IconComponent: UserCheck }, // Changed icon to UserCheck to represent care/consideration
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Reliable Detailing in Timmins
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">
            The DetailTrip Commitment
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} IconComponent={stat.IconComponent} />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-8">
          * "1,400+ Past Details" reflects prior experience before the official launch of DetailTrip.
        </p>
      </div>
    </section>
  );
};

export default TrustStats;