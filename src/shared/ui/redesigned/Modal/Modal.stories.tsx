import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';

const meta: Meta<typeof Modal> = {
    title: 'shared/redesigned/Modal',
    component: Modal,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        padding: '16',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
    },
};
export const Dark: Story = {
    args: {
        isOpen: true,
        padding: '16',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus voluptas ut autem sunt esse architecto tempore repellat similique rerum.',
    },
    decorators: [ThemeDecorator(Theme.DARK, 'app_redesigned')],
};
