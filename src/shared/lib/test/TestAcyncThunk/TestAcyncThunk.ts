import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<
	Return,
	Arg,
	{
		rejectValue: RejectValue;
	}
>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
	dispatch: jest.MockedFn<any>;
	getState: () => StateSchema;
	actionCreater: ActionCreatorType<Return, Arg, RejectValue>;

	constructor(actionCreater: ActionCreatorType<Return, Arg, RejectValue>) {
		this.actionCreater = actionCreater;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk(arg: Arg) {
		const action = this.actionCreater(arg);
		const result = await action(this.dispatch, this.getState, undefined);

		return result;
	}
}
