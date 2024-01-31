import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton
}

export default meta
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: { width: '100%', height: 200 }
}
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
}
export const Circle: Story = {
    args: { border: '50%', width: 100, height: 100 }
}
export const CircleDark: Story = {
    args: { border: '50%', width: 100, height: 100 },
    decorators: [ThemeDecorator(Theme.DARK)]
}
