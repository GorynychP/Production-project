import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
const meta: Meta<typeof AvatarDropdown> = {
    title: 'shared/AvatarDropdown',
    component: AvatarDropdown,
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'ivan',
                    avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
                    roles: [UserRole.ADMIN],
                },
            },
        }),
    ],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
