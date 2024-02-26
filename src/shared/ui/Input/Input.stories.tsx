import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
    args: {
        placeholder: 'Type text',
        value: 'value text',
    },
};
export const Dark: Story = {
    args: {
        placeholder: 'Type text',
        value: 'value text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
