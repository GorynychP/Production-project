/* eslint-disable path-ch-plg/layer-imports */
// eslint-disable-next-line path-ch-plg/layer-imports
import React from 'react';
import { StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { getAllFeatures, setFeatureFlags } from '@/shared/lib/features';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const NewDesignedDecorator = (theme?: Theme) => (Story: StoryFn) => {
    setFeatureFlags({ ...getAllFeatures(), isAppRedesigned: true });
    return (
        <ThemeProvider initialTheme={theme}>
            <div id="app" className={classNames('app_redesigned', {}, [theme])}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
