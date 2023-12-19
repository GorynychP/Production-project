import React, { ReactNode } from 'react';
import { Decorator, Meta, StoryFn, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
	(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<Story />
			</div>
		</ThemeProvider>
	);
