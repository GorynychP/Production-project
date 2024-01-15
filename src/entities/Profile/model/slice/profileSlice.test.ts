import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileAction, profileReducer } from './profileSlice';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
const data = {
	username: 'admin',
	first: 'Ivan',
	lastname: 'Burger',
	age: 20,
	city: 'Istambul',
	currency: Currency.EUR,
	country: Country.Turkey,
	avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
};
describe('profileSlice.test', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: true };
		expect(
			profileReducer(state as ProfileSchema, profileAction.setReadonly(false)),
		).toEqual({ readonly: false });
	});
	test('test cancelEdit', () => {
		const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
		expect(profileReducer(state as ProfileSchema, profileAction.cancelEdit())).toEqual({
			readonly: true,
			validateError: undefined,
			data,
			form: data,
		});
	});
	test('test  updateProfile', () => {
		const state: DeepPartial<ProfileSchema> = {
			form: { first: 'Вася' },
		};
		expect(
			profileReducer(
				state as ProfileSchema,
				profileAction.updateProfile({ first: 'Петя' }),
			),
		).toEqual({
			form: { first: 'Петя' },
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileErrors.SERVER_ERROR],
		};
		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
			isLoading: true,
			validateError: undefined,
		});
	});
	test('test update profile service fullfiled', () => {
		const state: DeepPartial<ProfileSchema> = {
			data: {},
			isLoading: true,
			validateError: undefined,
		};
		expect(
			profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
		).toEqual({
			data,
			form: data,
			isLoading: false,
			readonly: true,
			validateError: undefined,
		});
	});
	test('test update profile service rejected', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			validateError: [ValidateProfileErrors.SERVER_ERROR],
		};
		expect(profileReducer(state as ProfileSchema, updateProfileData.rejected)).toEqual({
			isLoading: false,
		});
	});
});
