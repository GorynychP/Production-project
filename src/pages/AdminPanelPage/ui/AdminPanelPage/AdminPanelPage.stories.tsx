import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import AdminPanelPage from './AdminPanelPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
