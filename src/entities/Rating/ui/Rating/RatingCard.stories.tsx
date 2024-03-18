import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { RatingCard } from './RatingCard';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
    args: { title: 'Ваша оценка' },
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

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
