interface SanityDocument {
  _type: string;
  _id: string;
}

export function resolvePreviewUrl(doc: SanityDocument) {
  if (doc._type === 'mainPage') {
    return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/preview?token=${process.env.SANITY_API_TOKEN}`;
  }
  return null;
}
