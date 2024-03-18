import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';
import { Theme } from '@/shared/const/theme';
const meta: Meta<typeof Tabs> = {
    title: 'shared/deprecated/Tabs',
    component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
    args: {
        tabs: [
            { value: 'tab1', content: 'content1' },
            { value: 'tab2', content: 'content2' },
            { value: 'tab3', content: 'content3' },
        ],
        value: 'tab2',
        onTabClick: action('onTabClick'),
    },
};

export const Dark: Story = {
    args: {
        tabs: [
            { value: 'tab1', content: 'content1' },
            { value: 'tab2', content: 'content2' },
            { value: 'tab3', content: 'content3' },
        ],
        value: 'tab2',
        onTabClick: action('onTabClick'),
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
