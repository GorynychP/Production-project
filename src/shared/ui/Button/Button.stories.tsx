import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
// import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
// import { StyleDecorator } from '../../config/storybook/StyleDecorator/StyleDecorator';
const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],

	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR,
	},
};
export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE,
	},
};
export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
