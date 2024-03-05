import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { MainLayout } from './MainLayout';
const meta: Meta<typeof MainLayout> = {
    title: 'shared/MainLayout',
    component: MainLayout,
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
