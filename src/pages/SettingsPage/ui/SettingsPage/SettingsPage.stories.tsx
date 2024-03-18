import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import SettingsPage from './SettingsPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';

const meta: Meta<typeof SettingsPage> = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    decorators: [StoreDecorator({}), NewDesignedDecorator()],
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [NewDesignedDecorator(Theme.DARK)],
};
