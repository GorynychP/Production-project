import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Card } from './Card';
import { Text } from '../Text/Text';
const meta: Meta<typeof Card> = {
    title: 'shared/redesigned/Card',
    component: Card,
    decorators: [ThemeDecorator(Theme.LIGHT, 'app_redesigned')],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
    args: { children: <Text title="JavaScript" text="text text" /> },
};

export const Dark: Story = {
    args: { children: <Text title="JavaScript" text="text text" /> },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
