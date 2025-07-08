import type { PreviewProps } from 'sanity';
import { Flex, Text } from '@sanity/ui';
import YouTubePlayer from 'react-player';

export function YouTubePreview(props: PreviewProps) {
  console.log(props);

  const { title } = props;
  return (
    <Flex padding={4} justify={'center'}>
      <Flex padding={1} justify={'center'}>
        {title ? (
          <YouTubePlayer height={200} src={title.toString()} />
        ) : (
          <Text>Додати посилання на відео</Text>
        )}
      </Flex>
    </Flex>
  );
}
