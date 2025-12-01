// this is the Footer.tsx file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Footer } from './footer';

const meta = {
component: Footer,
title: 'Atoms/Footer',
args: { onClick: fn() },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {
primary: true,
},
};