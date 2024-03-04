import { FeatureFlag } from '../../../types/featureFlag';
import { getFeatureFlag } from '../setGetFeatures';
import { ReactElement } from 'react';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlag;
    on: ReactElement;
    off: ReactElement;
}

export function ToggleFeatures({ feature, off, on }: ToggleFeaturesProps) {
    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
}
