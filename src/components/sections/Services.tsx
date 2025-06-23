import React from 'react';
import { ServiceSectionType } from '../../../types/sanityTypes';

interface ServicesProps {
  data: ServiceSectionType;
}

export const Services = ({ data }: ServicesProps) => {
  const { services, text, title } = data;

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            {title}
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">{text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className={`bg-dark-grey relative rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 ${service.featured ? 'ring-2 ring-accent relative' : ''}`}
            >
              <a
                href={`/services/${service.slug.current}`}
                aria-label="link for current service"
                className="absolute inset-0 cursor-pointer"
              ></a>
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dark-grey text-accent px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-grey text-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">
                  {service.title}
                </h3>
                <p className="text-white">{service.description}</p>
              </div>

              <div className="space-y-4 mb-6">
                {service.features &&
                  service.features.map((feature: string) => (
                    <div
                      className="flex items-center text-accent"
                      key={feature}
                    >
                      <svg
                        className="w-5 h-5 text-accent-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
              </div>

              <div className="border-t border-accent/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {service.price}
                  </span>
                  <span className="text-sm text-grey">{service.duration}</span>
                </div>
                <button
                  className={`w-full py-3 px-4 rounded-lg cursor-pointer font-semibold transition-all duration-200 ${service.featured ? 'bg-accent text-black hover:bg-accent/70' : 'bg-grey text-gray-900 hover:bg-gray-200'}`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
