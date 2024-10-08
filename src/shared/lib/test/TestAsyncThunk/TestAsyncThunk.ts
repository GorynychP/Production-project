import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<
	Return,
	Arg,
	{
		rejectValue: RejectValue;
	}
>;
jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)
// Async 
export class TestAsyncThunk<Return, Arg, RejectValue> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreater: ActionCreatorType<Return, Arg, RejectValue>
    api: jest.MockedFunctionDeep<AxiosStatic>
    constructor (
        actionCreater: ActionCreatorType<Return, Arg, RejectValue>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreater = actionCreater
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)
        this.api = mockedAxios
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreater(arg)
        const result = await action(this.dispatch, this.getState, {
            api: this.api
        })

        return result
    }
}
