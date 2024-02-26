import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
const notification = {
    id: '1',
    title: 'Уведомление №1',
    descriptions: 'Произошло какой-то событие 1',
    userId: '1',
};

const meta: Meta<typeof NotificationList> = {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
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
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
