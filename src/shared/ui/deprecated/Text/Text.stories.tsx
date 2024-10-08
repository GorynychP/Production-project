import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
    title: 'shared/deprecated/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
    },
};
export const Dark: Story = {
    args: {
        title: 'Title ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Error: Story = {
    args: {
        title: 'Title ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
        theme: TextTheme.ERROR,
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'Title ',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
    },
    // decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        size: TextSize.L,
        title: 'Title ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
    },
};
