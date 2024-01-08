import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import AvatarImg from './storybook.jpg';
const meta: Meta<typeof Select> = {
	title: 'shared/Select',
	component: Select,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
	args: {
		label: `Selector`,
		options: [
			{ value: 'Значение1', content: 'Контент1' },
			{ value: 'Значение2', content: 'Контент2' },
			{ value: 'Значение3', content: 'Контент3' },
		],
	},
};
