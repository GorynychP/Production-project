import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileData.test', () => {
    test('should return profileData', () => {
        const data = {
            username: 'admin',
            first: 'Ivan',
            lastname: 'Burger',
            age: 20,
            city: 'Istambul',
            currency: Currency.EUR,
            country: Country.Turkey,
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj'
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
