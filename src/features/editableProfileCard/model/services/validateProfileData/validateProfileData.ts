import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }
    const { age, first, username, lastname } = profile;
    const errors: ValidateProfileErrors[] = [];
    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }
    if (!username) {
        errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
    }

    return errors;
};
