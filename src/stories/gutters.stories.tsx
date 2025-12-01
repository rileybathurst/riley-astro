// this is the Gutters.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Gutters } from './gutters';

const meta = {
component: Gutters,
title: 'Molecules/Gutters',
args: { onClick: fn() },
} satisfies Meta<typeof Gutters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};