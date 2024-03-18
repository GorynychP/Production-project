import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { FilterContainer } from './FilterContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignedDecorator } from '@/shared/config/storybook/NewDesignedDecorator/NewDesignedDecorator';
const meta: Meta<typeof FilterContainer> = {
    title: 'Pages/Article/FilterContainer',
    component: FilterContainer,
    decorators: [StoreDecorator({}), NewDesignedDecorator()],
};

export default meta;
type Story = StoryObj<typeof FilterContainer>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [NewDesignedDecorator(Theme.DARK)],
};
