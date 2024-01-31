import { LoginSchema } from '../types/loginSchema'
import { loginAction, loginReducer } from './loginSlice'

describe('loginSlise.test', () => {
    test('test set Username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' }
        expect(loginReducer(state as LoginSchema, loginAction.setUsername('admin'))).toEqual({
            username: 'admin'
        })
    })
    test('test set Email', () => {
        const state: DeepPartial<LoginSchema> = { email: 'admin@gmail.com' }
        expect(
            loginReducer(state as LoginSchema, loginAction.setEmail('admin@gmail.com'))
        ).toEqual({
            email: 'admin@gmail.com'
        })
    })
    test('test set Password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' }
        expect(loginReducer(state as LoginSchema, loginAction.setPassword('123'))).toEqual({
            password: '123'
        })
    })
})
