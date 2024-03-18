import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/redesigned/Popups/Dropdown',
    component: Dropdown,
    decorators: [
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
        Story => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};
const items = [
    { content: 'second' },
    { content: 'avatar' },
    { content: 'settings' },
];
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        trigger: <Button>Меню</Button>,
        items,
        direction: 'top left',
    },
};

export const Dark: Story = {
    args: {
        trigger: <Button>Меню</Button>,
        items,
        direction: 'top left',
    },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
