import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from '@/entities/Article';
const article: Article = {
    id: '1',
    createdAt: '20.20.2010',
    blocks: [],
    img: '',
    subtitle: 'JavaScript',
    title: 'JavaScript',
    type: [ArticleType.IT],
    user: { id: '1', username: 'admin' },
    views: 10,
};
const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        mockData: [
            {
                url: __API__ + '/articles?limit=4&expand=user',
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                    { ...article, id: '4' },
                ],
            },
        ],
    },
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
