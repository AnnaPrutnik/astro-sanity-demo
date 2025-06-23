import { PortableText, PortableTextComponents } from '@portabletext/react';
import { TypedObject } from '@portabletext/types';

const components: PortableTextComponents = {
  marks: {
    accent: ({ children }) => (
      <span style={{ color: 'var(--color-accent)' }}>{children}</span>
    ),
  },
};

interface ColoredTextBlockProps {
  value: TypedObject | TypedObject[];
}

export default function ColoredTextBlock({ value }: ColoredTextBlockProps) {
  return <PortableText value={value} components={components} />;
}
