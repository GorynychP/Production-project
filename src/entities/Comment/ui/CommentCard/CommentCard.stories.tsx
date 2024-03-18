import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentCard } from './CommentCard';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};
const comment = {
    id: '1',
    text: 'Куку',
    user: {
        username: 'user',
        id: '1',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
};
export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment,
    },
};

export const Dark: Story = {
    args: {
        comment,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
export const NormalRedesigned: Story = {
    args: {
        comment,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
export const DarkRedesigned: Story = {
    args: {
        comment,
    },
    decorators: [
        ThemeDecorator(Theme.DARK, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
export const LoadingRedesigned: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
