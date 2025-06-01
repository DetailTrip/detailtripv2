import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, MapPin, Smile } from 'lucide-react';

interface StepItemProps {
  stepNumber: string;
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

const StepItem: React.FC<StepItemProps> = ({ stepNumber, IconComponent, title, description }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-200 text-center h-full flex flex-col">
    <div className="flex items-center justify-center h-20 w-20 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6 text-3xl font-bold ring-4 ring-blue-200">
      {stepNumber}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </div>
);

const HowItWorksSummary: React.FC = () => {
  const steps: StepItemProps[] = [
    {
      stepNumber: "1",
      IconComponent: CalendarCheck,
      title: "Book Your Mobile Detail",
      description:
        "Pick your service and choose a time that works. No payment needed to book — just tell us when you need us."
    },
    {
      stepNumber: "2",
      IconComponent: MapPin,
      title: "We Come To Your Location",
      description:
        "We arrive at your home or office in Timmins, fully equipped and ready to work — on time, every time."
    },
    {
      stepNumber: "3",
      IconComponent: Smile,
      title: "Enjoy Your Pristine Vehicle",
      description:
        "Your car is cleaned with real care — and you didn’t have to go anywhere. That’s mobile detailing done right."
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Detailing Made Easy, Right at Your Door
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our simple 3-step mobile detailing process means a spotless car without the usual hassle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {steps.map((step) => (
            <StepItem
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              IconComponent={step.IconComponent}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/process"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-md font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            How Our Mobile Detailing Works &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSummary;
