import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlag } from '@/shared/types/featureFlag';

interface UpdateFeatureFlagOptions {
    userId?: string;
    features: Partial<FeatureFlag>;
}

const featureFlagApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        updateFeatureFlag: build.mutation<void, UpdateFeatureFlagOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),
    }),
});

export const updateFeatureFlagMutation =
    featureFlagApi.endpoints.updateFeatureFlag.initiate;
