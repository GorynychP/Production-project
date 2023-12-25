import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
	args: {
		title: 'Title ',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
	},
};
export const Dark: Story = {
	args: {
		title: 'Title ',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
export const Error: Story = {
	args: {
		title: 'Title ',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
		theme: TextTheme.ERROR,
	},
};
export const OnliTitle: Story = {
	args: {
		title: 'Title ',
	},
};
export const OnliText: Story = {
	args: {
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
	},
	// decorators: [ThemeDecorator(Theme.DARK)],
};
