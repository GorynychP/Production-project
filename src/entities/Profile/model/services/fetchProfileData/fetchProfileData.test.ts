import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

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

describe('fetchProfileData.test', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: [data] }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled(); // Проверка, что запрос был выполнен
        expect(result.meta.requestStatus).toBe('fulfilled'); // Проверка, статус  fulfilled прошел
        expect(result.payload).toEqual([data]);
    });

    test('error fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected'); // Проверка, статус  fulfilled прошел
    });
});
