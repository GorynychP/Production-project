import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Dropdown } from './Dropdown';
import { Button } from '../../../../deprecated/Button/Button';
const meta: Meta<typeof Dropdown> = {
    title: 'shared/deprecated/Popups/Dropdown',
    component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        trigger: <Button>Меню</Button>,
        items: [
            { content: 'second' },
            { content: 'avatar' },
            { content: 'settings' },
        ],
        direction: 'top left',
    },
    decorators: [
        Story => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};

export const Dark: Story = {
    args: {
        trigger: <Button>Меню</Button>,
        items: [
            { content: 'second' },
            { content: 'avatar' },
            { content: 'settings' },
        ],
        direction: 'top left',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
