import type { PreviewProps } from 'sanity';
import { Flex, Text } from '@sanity/ui';
import YouTubePlayer from 'react-player';

interface PreviewYouTubeProps extends PreviewProps {
  url: string;
}

export function YouTubePreview(props: PreviewYouTubeProps) {
  console.log(props);

  const { url } = props;
  return (
    <Flex padding={4} justify={'center'}>
      <Flex padding={1} justify={'center'}>
        {url ? (
          <YouTubePlayer height={200} src={url} />
        ) : (
          <Text>Додати посилання на відео</Text>
        )}
      </Flex>
    </Flex>
  );
}
