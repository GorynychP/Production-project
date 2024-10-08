import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleViewSelector } from './ArticleViewSelector';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const NormalRedesigned: Story = {
    args: {},
    decorators: [NewDesignedDecorator()],
};

export const DarkRedesigned: Story = {
    args: {},
    decorators: [NewDesignedDecorator(Theme.DARK)],
};
