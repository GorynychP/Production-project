import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Normal: Story = {
    args: { isOpen: true },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: { isOpen: true },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const NormalDecorator: Story = {
    args: { isOpen: true },
    decorators: [NewDesignedDecorator(), StoreDecorator({})],
};

export const DarkDecorator: Story = {
    args: { isOpen: true },
    decorators: [NewDesignedDecorator(Theme.DARK), StoreDecorator({})],
};
