import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlesPageFilter } from './ArticlesPageFilter';
const meta: Meta<typeof ArticlesPageFilter> = {
	title: 'Pages/Article/ArticlesPageFilter',
	component: ArticlesPageFilter,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilter>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};
