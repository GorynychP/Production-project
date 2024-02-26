import React from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';

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
            <HStack
                max
                justify="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </HStack>
        );
    }
    if (error) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузки профиля:') + error}
                    text={t('Перезагрузитье пожалуйста страницу')}
                />
            </HStack>
        );
    }
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data.avatar} alt="" size={150} />
                </HStack>
            )}
            <Input
                placeholder={t('Ваше username')}
                value={data?.username}
                readonly={readonly}
                onChange={onChangeUsername}
                data-testid={'ProfileCard.username'}
            />
            <Input
                placeholder={t('Ваше имя')}
                value={data?.first}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                placeholder={t('Ваша фамилия')}
                value={data?.lastname}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                placeholder={t('Ваша возраст')}
                value={data?.age}
                readonly={readonly}
                onChange={onChangeAge}
                data-testid={'ProfileCard.age'}
            />
            <Input
                placeholder={t('Ваш город')}
                value={data?.city}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                placeholder={t('Ссылка на аватар')}
                value={data?.avatar}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeСountry}
                readonly={readonly}
            />
        </VStack>
    );
};
