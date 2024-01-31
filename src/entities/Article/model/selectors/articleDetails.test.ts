import { StateSchema } from 'app/providers/StoreProvider'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading
} from './articleDetails'

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = { id: '1', title: 'helo' }
        const state: DeepPartial<StateSchema> = {
            articleDetails: { article: data }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { error: 'error' }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true }
        }
        expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsLoading(state as StateSchema)).toEqual(false)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
})
