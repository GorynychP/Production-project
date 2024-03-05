import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SidebarRedesigned } from './SidebarRedesigned';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof SidebarRedesigned> = {
    title: 'widgets/SidebarRedesigned',
    component: SidebarRedesigned,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof SidebarRedesigned>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightAuth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: { id: '1', username: 'ivan' } },
        }),
    ],
};
