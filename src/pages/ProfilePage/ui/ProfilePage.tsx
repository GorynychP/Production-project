import React, { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	ProfileCard,
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
} from 'entities/Profile/model/selectors';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

interface ProfilePageProps {
	className?: string;
}
const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileLoading);
	const readonly = useSelector(getProfileReadonly);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);
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
