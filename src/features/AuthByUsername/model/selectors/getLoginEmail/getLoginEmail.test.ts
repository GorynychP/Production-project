import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginEmail } from './getLoginEmail'

describe('getLoginEmail.test', () => {
    test('should return email', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                email: 'admin@gmail.com'
            }
        }
        expect(getLoginEmail(state as StateSchema)).toEqual('admin@gmail.com')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginEmail(state as StateSchema)).toEqual('')
    })
})
