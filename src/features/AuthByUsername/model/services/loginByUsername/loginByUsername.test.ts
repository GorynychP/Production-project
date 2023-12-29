import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userAction } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/TestAcyncThunk/TestAcyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
	let dispatch: Dispatch;
	let getState: () => StateSchema;
	beforeEach(() => {
		(dispatch = jest.fn()), (getState = jest.fn());
	});
	test('success login', async () => {
		const userValue = { username: 'admin', id: '1' };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		// const action = loginByUsername({ username: 'admin', password: '123' });
		// const result = await action(dispatch, getState, undefined);

		expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue)); // Проверка отработки dispatch c action
		expect(thunk.dispatch).toHaveBeenCalledTimes(3); // Проверка количество отработаных dispatch
		expect(mockedAxios.post).toHaveBeenCalled(); // Проверка, что запрос был выполнен
		expect(result.meta.requestStatus).toBe('fulfilled'); // Проверка, статус  fulfilled прошел
		expect(result.payload).toEqual(userValue);
	});

	test('error login', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk({ username: 'admin', password: '123' });

		// const action = loginByUsername({ username: 'admin', password: '123' });
		// const result = await action(dispatch, getState, undefined);

		expect(thunk.dispatch).toHaveBeenCalledTimes(2); // Проверка количество отработаных dispatch
		expect(mockedAxios.post).toHaveBeenCalled(); // Проверка, что запрос был выполнен
		expect(result.meta.requestStatus).toBe('rejected'); // Проверка, статус  fulfilled прошел
		expect(result.payload).toBe('error');
	});
});
