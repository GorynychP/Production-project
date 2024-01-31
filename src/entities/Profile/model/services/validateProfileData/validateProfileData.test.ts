import { Currency } from 'entities/Currency'
import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/Country'
import { ValidateProfileErrors } from '../../types/profile'
const data = {
    username: 'admin',
    first: 'Ivan',
    lastname: 'Burger',
    age: 20,
    city: 'Istambul',
    currency: Currency.EUR,
    country: Country.Turkey
}

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })

    test('without first and last name', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileErrors.INCORECT_USER_DATA])
    })
    test('without age', () => {
        const result = validateProfileData({ ...data, age: undefined })
        expect(result).toEqual([ValidateProfileErrors.INCORECT_AGE])
    })
    test('without username', () => {
        const result = validateProfileData({ ...data, username: '' })
        expect(result).toEqual([ValidateProfileErrors.INCORECT_USERNAME])
    })
    test('without data', () => {
        const result = validateProfileData()
        expect(result).toEqual([ValidateProfileErrors.NO_DATA])
    })
    test('incorrect all', () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileErrors.INCORECT_USER_DATA,
            ValidateProfileErrors.INCORECT_AGE,
            ValidateProfileErrors.INCORECT_USERNAME
        ])
    })
})
