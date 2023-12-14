import React, { ReactNode } from 'react';
import { Decorator, Meta, StoryFn, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
	(
		<div className={`app ${theme}`}>
			<Story />
		</div>
	);
