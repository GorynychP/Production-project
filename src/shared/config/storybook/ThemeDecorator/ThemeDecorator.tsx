/* eslint-disable path-ch-plg/layer-imports */
import React, { Suspense } from 'react';
import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Suspense fallback="">
                    <Story />
                </Suspense>
            </div>
        </ThemeProvider>
    );
