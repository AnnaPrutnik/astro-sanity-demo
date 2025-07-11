import { createClient } from 'next-sanity';

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ac2gfv99';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-01-01';
export const studioUrl = process.env.NEXT_PUBLIC_SITE_URL + '/studio';
export const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
  stega: {
    studioUrl,
  },
});
