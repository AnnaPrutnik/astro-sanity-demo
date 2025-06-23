import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const builder = imageUrlBuilder(client);

export function urlFor(source: {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
}) {
  return builder.image(source);
}
