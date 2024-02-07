import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsCommends } from './ArticleDetailsCommends';
const meta: Meta<typeof ArticleDetailsCommends> = {
    title: 'shared/ArticleDetailsCommends',
    component: ArticleDetailsCommends,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsCommends>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
