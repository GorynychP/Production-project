import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';

const meta: Meta<typeof Input> = {
    title: 'shared/redesigned/Input',
    component: Input,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        FeaturesFlagDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
    ],
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
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
