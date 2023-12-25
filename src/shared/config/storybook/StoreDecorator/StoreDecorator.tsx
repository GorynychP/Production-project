import React from 'react';
import { Decorator, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
	(state?: DeepPartial<StateSchema>) => (Story: StoryFn) => {
		return (
			<StoreProvider initialState={state}>
				<Story />;
			</StoreProvider>
		);
	};
