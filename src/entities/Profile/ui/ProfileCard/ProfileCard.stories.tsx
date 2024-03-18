import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCard } from './ProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { FeaturesFlagDecorator } from '@/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};
const data = {
    username: 'admin',
    first: 'Ivan',
    lastname: 'Burger',
    age: 20,
    city: 'Istambul',
    currency: Currency.EUR,
    country: Country.Turkey,
    avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
};
export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Normal: Story = {
    args: {
        data,
    },
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: {
        data,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: 'Ivan', password: '123' },
        }),
    ],
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const NormalRedesigned: Story = {
    args: {
        data,
    },
    decorators: [
        StoreDecorator({}),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};

export const DarkRedesigned: Story = {
    args: {
        data,
    },
    decorators: [
        ThemeDecorator(Theme.DARK, 'app_redesigned'),
        StoreDecorator({
            loginForm: { username: 'Ivan', password: '123' },
        }),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};

export const WithErrorRedesigned: Story = {
    args: {
        error: 'error',
    },
    decorators: [
        ThemeDecorator(Theme.DARK, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
export const LoadingRedesigned: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK, 'app_redesigned'),
        FeaturesFlagDecorator({ isAppRedesigned: true }),
    ],
};
