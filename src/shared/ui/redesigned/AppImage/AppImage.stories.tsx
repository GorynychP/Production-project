import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppImage } from './AppImage';
import { Theme } from '@/shared/const/theme';
const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
