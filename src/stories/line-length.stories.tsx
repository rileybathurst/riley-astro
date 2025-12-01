// this is the LineLength.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { LineLength } from './line-length';

const meta = {
component: LineLength,
title: 'Molecules/LineLength',
args: { onClick: fn() },
} satisfies Meta<typeof LineLength>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};