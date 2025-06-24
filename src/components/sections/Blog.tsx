import React from 'react';
import { BlogSectionType } from '../../../types/sanityTypes';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/sanity.image';
import Link from 'next/link';

interface BlogProps {
  data: BlogSectionType;
}

export const Blog = ({ data }: BlogProps) => {
  const { articles, text, title } = data;
  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            {title}
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">{text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post) => (
            <article
              key={post._id}
              className="bg-dark-grey relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
            >
              <Link
                href={`/blog/${post.slug?.current || '#'}`}
                className="absolute inset-0 cursor-pointer"
              ></Link>
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={urlFor(post.mainImage).width(400).height(250).url()}
                  width={400}
                  height={250}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-grey mb-2">
                  <time className={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>

                <h3 className="text-xl font-bold text-accent mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <Link
                  href={`/blog/${post.slug?.current || '#'}`}
                  className="cursor-pointer inline-flex items-center text-grey hover:text-grey/50 font-semibold transition-colors"
                >
                  Read More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-grey font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Articles
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
