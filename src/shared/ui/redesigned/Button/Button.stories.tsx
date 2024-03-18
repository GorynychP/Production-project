import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    title: 'shared/redesigned/Button',
    component: Button,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator(Theme.LIGHT, 'app_redesigned')],
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

export const FilledDark: Story = {
    args: {
        children: 'Text',
        theme: 'filled',
    },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
export const OutlineSave: Story = {
    args: {
        children: 'Text',
        theme: 'outline_save',
    },
};
export const OutlineCancel: Story = {
    args: {
        children: 'Text',
        theme: 'outline_cancel',
    },
};
