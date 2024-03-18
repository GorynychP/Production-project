import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { FeaturesFlagDecorator } from '../../src/shared/config/storybook/FeaturesFlagDecorator/FeaturesFlagDecorator';
import { Theme } from '../../src/shared/const/theme';
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        FeaturesFlagDecorator({}),
    ],
};

export default preview;
