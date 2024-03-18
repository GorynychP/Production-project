/* eslint-disable path-ch-plg/layer-imports */
import React, { Suspense } from 'react';
import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/index.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
type AppDesigned = 'app_redesigned' | 'app';

export const ThemeDecorator =
    (theme: Theme, designed: AppDesigned = 'app') =>
    (Story: StoryFn) =>
        (
            <ThemeProvider initialTheme={theme}>
                <div id="app" className={classNames(designed, {}, [theme])}>
                    <Suspense fallback="">
                        <Story />
                    </Suspense>
                </div>
            </ThemeProvider>
        );
