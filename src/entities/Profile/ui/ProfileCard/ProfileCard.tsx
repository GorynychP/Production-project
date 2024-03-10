import React from 'react';
import { Profile } from '../../model/types/profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../components/ProfileCardRedesigned/ProfileCardRedesigned';
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedSkeleton,
} from '../components/ProfileCardDeprecated/ProfileCardDeprecated';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeUsername?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeСountry?: (value: Country) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { error, isLoading } = props;
    // const test = true;
    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedSkeleton />}
                off={<ProfileCardDeprecatedSkeleton />}
            />
        );
    }
    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedError error={error} />}
                off={<ProfileCardDeprecatedError error={error} />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
