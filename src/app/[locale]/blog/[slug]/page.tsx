import { client } from '@cms/lib/sanity.client';
import { PostType } from '../../../../../types/sanityTypes';
import { notFound } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@cms/lib/sanity.image';
import { draftMode } from 'next/headers';
import { getCurrentBlogQuery } from '@/api/queries';
import { BlogContent } from '@/components/shared/BlogContent/BlogContent';

type Params = Promise<{ slug: string }>;

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const post: PostType | null = await client.fetch(
    getCurrentBlogQuery,
    { slug },
    isEnabled
      ? {
          perspective: 'previewDrafts',
          useCdn: false,
          stega: true,
        }
      : undefined
  );

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <Link
        href="/"
        className="fixed top-8 right-8 mt-8 inline-block w-[250px] py-3 px-4 rounded-lg cursor-pointer font-semibold bg-primary-700 text-white hover:bg-primary-800 text-center transition-all duration-200"
      >
        Return Home
      </Link>
      <h1 className="text-4xl font-bold mb-4 text-accent">{post.title}</h1>
      <div className="mb-2 text-grey text-sm">
        {new Date(post.publishedAt).toLocaleDateString()}
      </div>
      <div className="mb-6 text-lg text-white">{post.description}</div>
      {post.mainImage && (
        <div className="mb-8">
          <Image
            src={urlFor(post.mainImage).width(800).height(400).url()}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      )}
      <div className="prose prose-invert mb-8">
        <BlogContent data={post.content} />
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-dark-grey text-grey px-3 py-1 rounded-full text-sm font-semibold"
          >
            #{tag}
          </span>
        ))}
      </div>
    </main>
  );
}
