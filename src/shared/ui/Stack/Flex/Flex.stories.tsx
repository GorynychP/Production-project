import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Flex } from './Flex';
const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Normal: Story = {
    args: {
        children: (
            <>
                <div>Flex</div>
                <div>Flex</div>
                <div>Flex</div>
            </>
        ),
    },
};

export const Dark: Story = {
    args: {
        children: (
            <>
                <div>Flex</div>
                <div>Flex</div>
                <div>Flex</div>
            </>
        ),
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
