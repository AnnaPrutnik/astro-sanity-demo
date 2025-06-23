import React from 'react';
import type { BlockStyleProps } from 'sanity';

export const ColoredTextPreview = (props: BlockStyleProps) => {
  console.log(props);
  return <span style={{ color: 'var(--color-accent)' }}>{props.children}</span>;
};
