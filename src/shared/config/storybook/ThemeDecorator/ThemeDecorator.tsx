import React, { Suspense } from 'react';
import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <Story />
            </Suspense>
        </div>
    </ThemeProvider>
);
