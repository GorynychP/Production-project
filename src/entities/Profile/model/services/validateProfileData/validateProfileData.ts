import { Profile, ValidateProfileErrors } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA]
    }
    const { age, first, username, lastname } = profile
    const errors: ValidateProfileErrors[] = []
    if (!first || !lastname) {
        errors.push(ValidateProfileErrors.INCORECT_USER_DATA)
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORECT_AGE)
    }
    if (!username) {
        errors.push(ValidateProfileErrors.INCORECT_USERNAME)
    }

    return errors
}
