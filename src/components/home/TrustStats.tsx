import React from 'react';
import { CheckCircle, Navigation, SearchCheck, UserCheck } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: React.ReactNode;
  IconComponent?: React.ElementType;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, IconComponent }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-center">
    {IconComponent && (
      <IconComponent className="mx-auto h-10 w-10 text-blue-600 mb-3" strokeWidth={1.5} />
    )}
    <div className="text-4xl font-bold text-blue-600">{value}</div>
    <div className="text-sm sm:text-base text-gray-600 mt-1 break-words leading-snug">
      {label}
    </div>
  </div>
);

const TrustStats: React.FC = () => {
  const stats: StatItemProps[] = [
    {
      value: '1,400+',
      label: (
        <>
          Vehicles Personally Detailed
          <span className="text-gray-400 text-xs ml-1">*</span>
        </>
      ),
      IconComponent: CheckCircle,
    },
    {
      value: '100%',
      label: 'Mobile Service — We Come to You',
      IconComponent: Navigation,
    },
    {
      value: 'No Rush',
      label: 'Details Done Properly',
      IconComponent: SearchCheck,
    },
    {
      value: 'Safe & Respectful',
      label: (
        <span className="block leading-tight text-sm sm:text-base">
          Pet-Friendly<br />Process
        </span>
      ),
      IconComponent: UserCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Reliable Detailing in Timmins
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-4xl">
            The DetailTrip Commitment
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StatItem
              key={typeof stat.label === 'string' ? stat.label : 'stat-' + stat.value}
              value={stat.value}
              label={stat.label}
              IconComponent={stat.IconComponent}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-8 max-w-xl mx-auto">
          * Reflects hands-on experience detailing over 1,400 vehicles before officially launching DetailTrip — every one done with care, not speed.
        </p>
      </div>
    </section>
  );
};

export default TrustStats;
