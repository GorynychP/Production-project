import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';
import { Theme } from '@/shared/const/theme';
import { Drawer } from './Drawer';
const meta: Meta<typeof Drawer> = {
    title: 'shared/redesigned/Drawer',
    component: Drawer,

    decorators: [FeaturesFlagDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Normal: Story = {
    args: { isOpen: true },
};

export const Dark: Story = {
    args: { isOpen: true },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
