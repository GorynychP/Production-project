import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.article
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error
export const getArticleDetailsLoading = (state: StateSchema) =>
    state.articleDetails?.isLoading || false
