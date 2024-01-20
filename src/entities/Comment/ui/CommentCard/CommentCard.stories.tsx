import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
	title: 'entities/CommentCard',
	component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
	args: {
		comment: {
			id: '1',
			text: 'Куку',
			user: {
				username: 'user',
				id: '1',
				avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
			},
		},
	},
};

export const Dark: Story = {
	args: {
		comment: {
			id: '1',
			text: 'Куку',
			user: {
				username: 'user',
				id: '1',
				avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
			},
		},
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
