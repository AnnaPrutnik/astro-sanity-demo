import ReactPlayer from 'react-player';
import React from 'react';

export const Youtube = ({
  value,
}: {
  value: { url: string; title: string };
}) => {
  const { url } = value;
  return (
    <ReactPlayer
      style={{ width: '100%', height: '500px' }}
      width={'100%'}
      height={480}
      controls
      src={url}
      key={url}
    />
  );
};
