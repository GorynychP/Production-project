import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsCommends } from './ArticleDetailsCommends';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
const meta: Meta<typeof ArticleDetailsCommends> = {
    title: 'pages/Article/ArticleDetailsCommends',
    component: ArticleDetailsCommends,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsCommends>;

export const Normal: Story = {
    args: { id: '1' },
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
