import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { components } from './components';

interface PortableComponentProps {
  data: PortableTextBlock[];
}

export const BlogContent = ({ data }: PortableComponentProps) => {
  return <PortableText value={data} components={components} />;
};
