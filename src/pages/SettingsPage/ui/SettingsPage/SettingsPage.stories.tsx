import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';;
import { SettingsPage } from './SettingsPage';

const meta: Meta<typeof SettingsPage> = {
	title: 'pages/SettingsPage',
	component: SettingsPage,
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};