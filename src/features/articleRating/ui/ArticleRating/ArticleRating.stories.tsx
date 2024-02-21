import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleRating } from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
	title: 'features/ArticleRating',
	component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};