import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';
const notification = {
    id: '1',
    title: 'Уведомление №1',
    descriptions: 'Произошло какой-то событие 1',
    userId: '1',
};

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                delay: 1000,
                response: [
                    { ...notification, id: '1' },
                    { ...notification, id: '2' },
                    { ...notification, id: '3' },
                    { ...notification, id: '4' },
                ],
            },
        ],
    },
    decorators: [
        StoreDecorator({}),
        Story => (
            <div style={{ padding: '10px 0px 0px 600px' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

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
