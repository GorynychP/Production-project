module.exports = (layer, componentName) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';;
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
	title: '${layer}/${componentName}',
	component: ${componentName},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Normal: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
};`;
