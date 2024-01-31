import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/Select/CurrencySelect',
    component: CurrencySelect
}

export default meta
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {}
}
