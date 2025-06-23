import { client } from '../../../../sanity/lib/sanity.client';
import { ServiceCardType } from '../../../../types/sanityTypes';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ServicePageProps {
  params: { slug: string };
}

async function getServiceBySlug(slug: string): Promise<ServiceCardType | null> {
  const query = `*[_type == "serviceCard" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}

export const dynamic = 'force-dynamic';

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-accent">{service.title}</h1>
      <div className="mb-6 text-lg text-white">{service.description}</div>
      <div className="mb-6 flex flex-wrap gap-2">
        {service.features?.map((feature) => (
          <span
            key={feature}
            className="bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold"
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="mb-6 flex gap-8 items-center">
        <span className="text-2xl font-bold text-accent">{service.price}</span>
        <span className="text-md text-grey">{service.duration}</span>
      </div>
      <button
        className={`w-[250px] py-3 px-4 rounded-lg cursor-pointer font-semibold transition-all duration-200 ${service.featured ? 'bg-accent text-black hover:bg-accent/70' : 'bg-grey text-gray-900 hover:bg-gray-200'}`}
      >
        Get Started
      </button>
      <Link
        href="/"
        className="fixed top-8 right-8 mt-8 inline-block w-[250px] py-3 px-4 rounded-lg cursor-pointer font-semibold bg-primary-700 text-white hover:bg-primary-800 text-center transition-all duration-200"
      >
        Return Home
      </Link>
    </main>
  );
}
