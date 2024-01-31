import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileErrors } from 'entities/Profile'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    first: 'Ivan',
                    lastname: 'Burger',
                    age: 20,
                    city: 'Istambul',
                    currency: Currency.EUR,
                    country: Country.Turkey,
                    avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj'
                }
            }
        })
    ]
}

export default meta
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
    args: {}
}
export const Readonly: Story = {
    args: {},
    decorators: [StoreDecorator({ profile: { readonly: true } })]
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { error: 'error' } })]
}
export const ValidationError: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                validateError: [
                    ValidateProfileErrors.INCORECT_USERNAME,
                    ValidateProfileErrors.INCORECT_AGE
                ]
            }
        })
    ]
}
export const Loading: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { isLoading: true } })]
}
