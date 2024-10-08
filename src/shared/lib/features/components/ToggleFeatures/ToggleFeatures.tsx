import { FeatureFlags } from '../../../../types/featureFlag';
import { getFeatureFlag } from '../../lib/setGetFeatures';
import { ReactElement } from 'react';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export function ToggleFeatures({ feature, off, on }: ToggleFeaturesProps) {
    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
}
