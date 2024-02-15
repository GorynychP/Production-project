import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotificationButton } from './NotificationButton';
const meta: Meta<typeof NotificationButton> = {
    title: 'feature/NotificationButton',
    component: NotificationButton,
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
