import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

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

export const LightRedesigned: Story = {
    args: {},
    decorators: [NewDesignedDecorator()],
};

export const DarkRedesigned: Story = {
    args: {},
    decorators: [NewDesignedDecorator(Theme.DARK)],
};

export const LightAuthRedesigned: Story = {
    args: {},
    decorators: [
        NewDesignedDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: { id: '1', username: 'ivan' } },
        }),
    ],
};
