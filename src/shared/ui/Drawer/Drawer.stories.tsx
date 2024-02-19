import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Drawer } from './Drawer';
const meta: Meta<typeof Drawer> = {
    title: 'shared/Drawer',
    component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
