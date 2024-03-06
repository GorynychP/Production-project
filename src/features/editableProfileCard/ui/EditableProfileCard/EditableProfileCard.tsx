import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import {
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
} from '../../model/selectors';
import { ValidateProfileErrors } from '../../model/types/editableProfileCardSchema';
import { profileAction, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { ProfileCard } from '@/entities/Profile';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}
const reducers: ReducersList = { profile: profileReducer };

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslate = {
        [ValidateProfileErrors.SERVER_ERROR]: t('CЕРВЕРНАЯ ОШИБКА'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('НЕКОРРЕКТНЫЙ ВОЗРАСТ'),
        [ValidateProfileErrors.INCORRECT_USERNAME]: t('НЕКОРРЕКТНЫЙ USERNAME'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
            'ИМЯ И ФАМИЛИЯ ОБЯЗАТЕЛЬНЫ',
        ),
        [ValidateProfileErrors.NO_DATA]: t('ДАННЫЕ НЕ УКАЗАНЫ'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileAction.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileAction.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );
    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileAction.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );
    const onChangeAge = useCallback(
        (value?: string) => {
            const parsedValue = Number(value || 0);
            if (!isNaN(parsedValue)) {
                dispatch(profileAction.updateProfile({ age: parsedValue }));
            }
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileAction.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeСountry = useCallback(
        (country: Country) => {
            dispatch(profileAction.updateProfile({ country }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileAction.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileAction.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map(err => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            title={validateErrorTranslate[err]}
                            data-testid={'EditableProfileCard.Error'}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeUsername={onChangeUsername}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeСountry={onChangeСountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
