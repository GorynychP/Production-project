import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    // parameters: {
    // 	layout: 'centered',
    // },
    // tags: ['autodocs'],

    argTypes: {
        // backgroundColor: { control: 'color' },
    }
}

export default meta
type Story = StoryObj<typeof LoginForm>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})]
}

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            loginForm: { username: 'Ivan', password: '123' }
        })
    ]
}
export const withError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'Ivan', password: '123', error: 'error text' }
        })
    ]
}
export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true }
        })
    ]
}
