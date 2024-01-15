import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm.test', () => {
	test('should return profileForm', () => {
		const form = {
			username: 'admin',
			first: 'Ivan',
			lastname: 'Burger',
			age: 20,
			city: 'Istambul',
			currency: Currency.EUR,
			country: Country.Turkey,
			avatar: 'https://yt3.ggpht.com/ytc/AAUvwngFzM_Rf6MNwOnFcuphoj93k7VFjlIrj-kSMxbh=s900-c-k-c0x00ffffff-no-rj',
		};
		const state: DeepPartial<StateSchema> = {
			profile: {
				form,
			},
		};
		expect(getProfileForm(state as StateSchema)).toEqual(form);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
