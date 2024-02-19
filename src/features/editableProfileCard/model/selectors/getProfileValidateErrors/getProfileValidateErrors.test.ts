import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should return validationError', () => {
        const errors = [
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_USERNAME,
            ValidateProfileErrors.NO_DATA,
            ValidateProfileErrors.SERVER_ERROR,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
