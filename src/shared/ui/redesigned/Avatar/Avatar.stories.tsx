import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
const meta: Meta<typeof Avatar> = {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    decorators: [ThemeDecorator(Theme.LIGHT, 'app_redesigned')],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};
export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 50,
    },
};
export const NotIMG: Story = {
    args: {
        alt: 'тут должен быть аватар',
    },
};
