import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
	getProfileData,
	getProfileError,
	getProfileLoading,
} from 'entities/Profile/model/selectors';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const profileData = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileLoading);
	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Профиль')} />
				<Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
					{t('Редактировать')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					className={cls.input}
					placeholder={t('Ваше имя')}
					value={profileData?.first}
				/>
				<Input
					className={cls.input}
					placeholder={t('Ваша фамилия')}
					value={profileData?.lastname}
				/>
			</div>
		</div>
	);
};
