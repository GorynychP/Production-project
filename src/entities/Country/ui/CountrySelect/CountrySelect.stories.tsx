import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
	title: 'shared/CountrySelect',
	component: CountrySelect,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
	args: {},
};
