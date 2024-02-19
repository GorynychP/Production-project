import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentsLoading = (state: StateSchema) =>
    state.articleDetailsComments?.isLoading || false
export const getArticleDetailsCommentsError = (state: StateSchema) =>
    state.articleDetailsComments?.error
