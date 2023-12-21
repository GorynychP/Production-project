import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
	title: 'features/LoginModal',
	component: LoginModal,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],

	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Normal: Story = {
	args: { isOpen: true },
};

export const Dark: Story = {
	args: { isOpen: true },
	decorators: [ThemeDecorator(Theme.DARK)],
};
