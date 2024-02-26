import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
const profile: Profile = {
    age: 20,
    avatar: '',
    country: Country.Turkey,
    city: 'Istanbul',
    currency: Currency.EUR,
    first: 'ivan',
    id: '1',
    lastname: 'ivan',
    username: 'admin',
};
const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    decorators: [
        StoreDecorator({
            profile: { data: profile, form: profile },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
