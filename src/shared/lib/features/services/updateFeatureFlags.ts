import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlag } from '../../../types/featureFlag';
import { getAllFeatures } from '../lib/setGetFeatures';
import { updateFeatureFlagMutation } from '../api/featureFlagApi';
interface UpdateFeatureFlagOptions {
    userId?: string;
    newFeatures: Partial<FeatureFlag>;
}
export const updateFeatureFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('user/updateFeatureFlag', async ({ userId, newFeatures }, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    if (!userId) {
        return rejectWithValue('');
    }

    try {
        await dispatch(
            updateFeatureFlagMutation({
                userId,
                features: {
                    ...getAllFeatures(),
                    ...newFeatures,
                },
            }),
        );
        window.location.reload();
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
