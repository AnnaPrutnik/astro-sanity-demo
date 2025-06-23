import { defineType } from 'sanity';
import { ColoredTextPreview } from '../../components/ColoredTextPreview';

export const coloredTextType = defineType({
  name: 'coloredText',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {
            title: 'Accent Color',
            value: 'accent',
            component: ColoredTextPreview,
          },
        ],
        annotations: [],
      },
      styles: [],
      lists: [],
    },
  ],
});
