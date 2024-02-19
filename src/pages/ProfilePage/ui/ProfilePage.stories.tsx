import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileErrors } from '@/features/editableProfileCard/model/types/editableProfileCardSchema';
import { Profile } from '@/entities/Profile';
const profile: Profile = {
    id: '1',
    username: 'admin',
    first: 'Ivan',
    lastname: 'Burger',
    age: 20,
    city: 'Istambul',
    currency: Currency.EUR,
    country: Country.Turkey,
    avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
};

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        StoreDecorator({
            profile: {
                form: profile,
                data: profile,
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {},
};
export const Readonly: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: { readonly: true, form: profile },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ profile: { error: 'error' } }),
    ],
};
export const ValidationError: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                validateError: [
                    ValidateProfileErrors.INCORRECT_USERNAME,
                    ValidateProfileErrors.INCORRECT_AGE,
                ],
            },
        }),
    ],
};
export const Loading: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ profile: { isLoading: true } }),
    ],
};
