import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileErrors } from '../../types/profile'

describe('getProfileValidateErrors.test', () => {
    test('should return validationError', () => {
        const errors = [
            ValidateProfileErrors.INCORECT_AGE,
            ValidateProfileErrors.INCORECT_USER_DATA,
            ValidateProfileErrors.INCORECT_USERNAME,
            ValidateProfileErrors.NO_DATA,
            ValidateProfileErrors.SERVER_ERROR
        ]

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
