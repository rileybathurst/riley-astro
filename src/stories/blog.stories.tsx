// this is the Name.stories.tsx file
import type { Meta, StoryObj } from '@storybook/react';
import { Blog } from './blog';

const meta = {
  component: Blog,
  title: 'Templates/Blog',
  args: {},
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};