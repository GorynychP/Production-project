import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: 'clear',
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.M,
    },
};
export const DisabletSizeM: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.M,
        disabled: true,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
        size: ButtonSize.XL,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Background: Story = {
    args: {
        children: 'Text',
        theme: 'background',
    },
};
export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: 'backgroundInverted',
    },
};
export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: 'backgroundInverted',
        square: true,
        size: ButtonSize.XL,
    },
};
