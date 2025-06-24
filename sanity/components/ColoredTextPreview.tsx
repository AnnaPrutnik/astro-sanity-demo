import React from 'react';
import type { BlockStyleProps } from 'sanity';

export const ColoredTextPreview = (props: BlockStyleProps) => {
  const { children, renderDefault } = props;

  if (!children) {
    return renderDefault ? renderDefault(props) : null;
  }

  return <span style={{ color: '#8b5cf6' }}>{children}</span>;
};
