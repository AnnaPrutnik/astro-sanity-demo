'use client';

import { usePreviewSubscription } from '../../../sanity/lib/sanity.preview';
import { urlFor } from '../../../sanity/lib/sanity.image';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface ServiceCard {
  _id: string;
  _type: 'serviceCard';
  title: string;
  description: string;
  icon?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  price?: string;
  [key: string]: unknown;
}

interface MainPage {
  _id: string;
  _type: 'mainPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  heroSection: {
    title: string;
    text: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
  aboutSection: {
    title: string;
    text: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
  servicesSection: {
    title: string;
    text: string;
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    services: ServiceCard[];
  };
  [key: string]: unknown;
}

const query = `*[_type == "mainPage"][0]{
  _type,
  title,
  heroSection{
    title,
    text,
    image
  },
  aboutSection{
    title,
    text,
    image
  },
  servicesSection{
    title,
    text,
    image,
    services[]->{
      _id,
      title,
      description,
      icon,
      price
    }
  }
}`;

function PreviewPage({ data }: { data: MainPage }) {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const { data: liveData, isLoading } = usePreviewSubscription<MainPage>(
    query,
    token,
    data
  );

  if (isLoading) {
    return <div>Loading preview...</div>;
  }

  if (!liveData) {
    return <div>No data available</div>;
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {liveData.heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {liveData.heroSection.text}
          </p>
          {liveData.heroSection.image && (
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src={urlFor(liveData.heroSection.image).url()}
                alt="Hero"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                {liveData.aboutSection.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {liveData.aboutSection.text}
              </p>
            </div>
            {liveData.aboutSection.image && (
              <div className="relative h-96">
                <Image
                  src={urlFor(liveData.aboutSection.image).url()}
                  alt="About"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              {liveData.servicesSection.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {liveData.servicesSection.text}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {liveData.servicesSection.services?.map((service: ServiceCard) => (
              <div
                key={service._id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {service.icon && (
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <Image
                      src={urlFor(service.icon).url()}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.price && (
                  <p className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Services Section Image */}
          {liveData.servicesSection.image && (
            <div className="relative h-96 max-w-4xl mx-auto">
              <Image
                src={urlFor(liveData.servicesSection.image).url()}
                alt="Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default PreviewPage;
