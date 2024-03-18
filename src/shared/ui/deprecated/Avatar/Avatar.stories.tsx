import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';
const meta: Meta<typeof Avatar> = {
    title: 'shared/deprecated/Avatar',
    component: Avatar,
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
