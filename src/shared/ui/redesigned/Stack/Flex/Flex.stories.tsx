import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Flex } from './Flex';
import { Theme } from '@/shared/const/theme';
const meta: Meta<typeof Flex> = {
    title: 'shared/redesigned/Flex',
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
