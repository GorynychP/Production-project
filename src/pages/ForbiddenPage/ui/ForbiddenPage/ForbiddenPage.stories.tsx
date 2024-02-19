import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ForbiddenPage } from './ForbiddenPage';
const meta: Meta<typeof ForbiddenPage> = {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
