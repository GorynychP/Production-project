import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
	className?: string;
}
const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = ({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames('', {}, [className])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
