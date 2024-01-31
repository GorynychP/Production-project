import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsRecommendLoading = (state: StateSchema) =>
    state.articleDetailsRecommendation?.isLoading || false
export const getArticleDetailsRecommendError = (state: StateSchema) =>
    state.articleDetailsRecommendation?.error
