import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Popover } from './Popover';
import { Theme } from '@/shared/const/theme';
const meta: Meta<typeof Popover> = {
    title: 'shared/deprecated/Popups/Popover',
    component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
