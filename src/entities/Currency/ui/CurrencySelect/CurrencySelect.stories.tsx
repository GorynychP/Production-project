import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
	title: 'shared/CurrencySelect',
	component: CurrencySelect,
	// parameters: {
	// 	layout: 'centered',
	// },
	// tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
	args: {},
};
