import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';
import { Theme } from '@/shared/const/theme';
const meta: Meta<typeof ListBox> = {
    title: 'shared/redesigned/Popups/ListBox',
    component: ListBox,
    decorators: [ThemeDecorator(Theme.LIGHT, 'app_redesigned')],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
    args: {
        // value: '1',
        defaultValue: 'Дефолтное название',
        items: [
            { value: '1', content: 'Контент1' },
            { value: '2', content: 'Контент2' },
            { value: '3', content: 'Контент3' },
            { value: '4', content: 'Контент4', disabled: true },
        ],
        onChange: (value: string) => {},
    },
};

export const Dark: Story = {
    args: {
        // value: '1',
        defaultValue: 'Дефолтное название',
        items: [
            { value: '1', content: 'Контент1' },
            { value: '2', content: 'Контент2' },
            { value: '3', content: 'Контент3' },
            { value: '4', content: 'Контент4', disabled: true },
        ],
        onChange: (value: string) => {},
    },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
