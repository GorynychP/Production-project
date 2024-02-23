import React from 'react';
import { StoryFn } from '@storybook/react';
import '@/app/styles/index.scss';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articlePageReducer } from '@/pages/ArticlesPage/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlePageReducer,
};

export const StoreDecorator =
    (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
        (Story: StoryFn) => {
            return (
                <StoreProvider
                    initialState={state}
                    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                >
                    <Story />
                </StoreProvider>
            );
        };
