import React from 'react';
import { Decorator, StoryFn } from '@storybook/react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { articlePageReducer } from 'pages/ArticlesPage/model/slices/articlePageSlice';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleDetailsComments: articleDetailsCommentsReducer,
	addCommentForm: addCommentFormReducer,
	articlesPage: articlePageReducer,
};

export const StoreDecorator =
	(state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) => {
		return (
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<Story />
			</StoreProvider>
		);
	};
