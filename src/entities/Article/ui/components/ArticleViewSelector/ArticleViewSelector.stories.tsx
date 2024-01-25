import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';
const meta: Meta<typeof ArticleViewSelector> = {
	title: 'entities/Article/ArticleViewSelector',
	component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
