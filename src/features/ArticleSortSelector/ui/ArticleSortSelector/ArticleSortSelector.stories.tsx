import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleSortSelector } from './ArticleSortSelector';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'features/Article/ArticleSortSelector',
    component: ArticleSortSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalRedesigned: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};

export const DarkRedesigned: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
