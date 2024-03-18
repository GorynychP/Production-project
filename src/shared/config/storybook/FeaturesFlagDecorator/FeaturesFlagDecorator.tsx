import React from 'react';
import { StoryFn } from '@storybook/react';
// eslint-disable-next-line path-ch-plg/layer-imports
import '@/app/styles/index.scss';
import { FeatureFlags } from '@/shared/types/featureFlag';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeaturesFlagDecorator =
    (features: FeatureFlags) => (Story: StoryFn) => {
        setFeatureFlags(features);
        return <Story />;
    };
