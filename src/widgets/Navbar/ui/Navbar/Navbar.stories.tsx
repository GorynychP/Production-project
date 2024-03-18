import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],
    // argTypes: {
    //     // backgroundColor: { control: 'color' },
    // },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const AuthDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ user: { authData: {} } }),
    ],
};

export const LightRedesigned: Story = {
    args: {},
    decorators: [StoreDecorator({}), NewDesignedDecorator()],
};

export const DarkRedesigned: Story = {
    args: {},
    decorators: [NewDesignedDecorator(Theme.DARK), StoreDecorator({})],
};
export const AuthDarkRedesigned: Story = {
    args: {},
    decorators: [
        NewDesignedDecorator(Theme.DARK),
        StoreDecorator({ user: { authData: {} } }),
    ],
};
