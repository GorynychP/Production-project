import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	ProfileCard,
	ValidateProfileErrors,
	fetchProfileData,
	profileAction,
	profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
	getProfileError,
	getProfileForm,
	getProfileLoading,
	getProfileReadonly,
	getProfileValidateErrors,
} from 'entities/Profile/model/selectors';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
	className?: string;
}
const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();
	const formData = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileLoading);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
	const validateErrorTranslate = {
		[ValidateProfileErrors.SERVER_ERROR]: t('CЕРВЕРНАЯ ОШИБКА'),
		[ValidateProfileErrors.INCORECT_AGE]: t('НЕКОРРЕКТНЫЙ ВОЗРАСТ'),
		[ValidateProfileErrors.INCORECT_USERNAME]: t('НЕКОРРЕКТНЫЙ USERNAME'),
		[ValidateProfileErrors.INCORECT_USER_DATA]: t('ИМЯ И ФАМИЛИЯ ОБЯЗАТЕЛЬНЫ'),
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
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length &&
					validateErrors.map((err) => (
						<Text
							key={err}
							theme={TextTheme.ERROR}
							title={validateErrorTranslate[err]}
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
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
