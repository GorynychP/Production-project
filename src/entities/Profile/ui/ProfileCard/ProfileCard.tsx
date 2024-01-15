import React from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
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
	const {
		className,
		data,
		error,
		isLoading,
		readonly,
		onChangeUsername,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeСountry,
		onChangeCurrency,
		onChangeAvatar,
	} = props;
	const { t } = useTranslation('profile');
	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
				<Loader />
			</div>
		);
	}
	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					title={t('Произошла ошибка при загрузки профиля:') + error}
					text={t('Перезагрузитье пожалуйста страницу')}
				/>
			</div>
		);
	}
	const mods: Mods = {
		[cls.editing]: !readonly,
	};
	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			<div className={cls.data}>
				{data?.avatar && (
					<div className={cls.avatarWrapper}>
						<Avatar src={data.avatar} alt="" size={150} />
					</div>
				)}
				<Input
					className={cls.input}
					placeholder={t('Ваше username')}
					value={data?.username}
					readonly={readonly}
					onChange={onChangeUsername}
				/>
				<Input
					className={cls.input}
					placeholder={t('Ваше имя')}
					value={data?.first}
					readonly={readonly}
					onChange={onChangeFirstname}
				/>
				<Input
					className={cls.input}
					placeholder={t('Ваша фамилия')}
					value={data?.lastname}
					readonly={readonly}
					onChange={onChangeLastname}
				/>
				<Input
					className={cls.input}
					placeholder={t('Ваша возраст')}
					value={data?.age}
					readonly={readonly}
					onChange={onChangeAge}
				/>
				<Input
					className={cls.input}
					placeholder={t('Ваш город')}
					value={data?.city}
					readonly={readonly}
					onChange={onChangeCity}
				/>
				<Input
					className={cls.input}
					placeholder={t('Ссылка на аватар')}
					value={data?.avatar}
					readonly={readonly}
					onChange={onChangeAvatar}
				/>
				<CurrencySelect
					className={cls.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeСountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
