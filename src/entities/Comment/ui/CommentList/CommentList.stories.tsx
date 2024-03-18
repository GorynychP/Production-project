import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentList } from './CommentList';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
};
const comments = [
    {
        id: '1',
        text: 'Куку',
        user: {
            username: 'user',
            id: '1',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    },
    {
        id: '2',
        text: 'Yejdsfsd',
        user: {
            username: 'user',
            id: '1',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    },
    {
        id: '3',
        text: 'fdhghfgh',
        user: {
            username: 'admin',
            id: '2',
            avatar: 'https://pics.craiyon.com/2023-08-06/7bc5b0ccdd4d4576a03ecd52815ae1bc.webp',
        },
    },
];
export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments,
    },
};

export const Dark: Story = {
    args: {
        comments,
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
        comments,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};

export const DarkRedesigned: Story = {
    args: {
        comments,
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
        ThemeDecorator(Theme.DARK, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
