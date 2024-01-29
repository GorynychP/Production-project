import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleEditPage from './ArticleEditPage';
const meta: Meta<typeof ArticleEditPage> = {
	title: 'pages/Article/ArticleEditPage',
	component: ArticleEditPage,
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
