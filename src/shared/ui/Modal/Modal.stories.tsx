import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
	},
};
export const Dark: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
