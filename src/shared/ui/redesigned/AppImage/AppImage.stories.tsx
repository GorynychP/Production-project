import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppImage } from './AppImage';
import { Theme } from '@/shared/const/theme';
import { Skeleton } from '../Skeleton';
const meta: Meta<typeof AppImage> = {
    title: 'shared/redesigned/AppImage',
    component: AppImage,
    decorators: [ThemeDecorator(Theme.LIGHT, 'app_redesigned')],
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Normal: Story = {
    args: {
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    },
};

export const Dark: Story = {
    args: {
        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
