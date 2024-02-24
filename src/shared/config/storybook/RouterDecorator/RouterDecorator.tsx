import React from 'react';
import { Decorator } from '@storybook/react';
// eslint-disable-next-line path-ch-plg/layer-imports
import '@/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator = Story => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
};
