import React from 'react';
import { CalendarCheck, MapPin, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Your Mobile Detail",
    description: "Pick your service and choose a time that works. No payment needed to book — just tell us when you need us."
  },
  {
    icon: MapPin,
    title: "We Come To Your Location",
    description: "We arrive at your home in Timmins — fully equipped and ready to work. Just point us to the driveway or garage."
  },
  {
    icon: Smile,
    title: "Enjoy Your Pristine Vehicle",
    description: "No waiting rooms, no ride planning. Just honest service done with real care — right at your door."
  },
];

const HowItWorksWithMap: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Column */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="DetailTrip Service Area Map"
              src="https://www.google.com/maps/d/u/0/embed?mid=1mm7y9JQn7cgWd0vOZkRXhbpLKLdO3cM&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Steps Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 text-center lg:text-left">
              Mobile Detailing, Made Easy in Timmins
            </h2>
            <p className="text-lg text-gray-600 mb-10 text-center lg:text-left max-w-xl">
              It’s as simple as 1-2-3. We come to you — no stress, no pressure.
            </p>

            <ol className="space-y-8">
              {steps.map(({ icon: Icon, title, description }, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 ring-4 ring-blue-200">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 text-center lg:text-left">
              <Link
                to="/process"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                How Our Mobile Detailing Works &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksWithMap;
