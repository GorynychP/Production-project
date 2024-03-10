import React, { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { ProfileCardProps } from '../../ProfileCard/ProfileCard';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';

/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const ProfileCardDeprecatedSkeleton = () => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.ProfileCardDeprecated, {}, [cls.loading])}
        >
            <Loader />
        </HStack>
    );
};
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const ProfileCardDeprecatedError = ({ error }: { error: string }) => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.ProfileCardDeprecated, {}, [cls.error])}
        >
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузки профиля:') + error}
                text={t('Перезагрузитье пожалуйста страницу')}
            />
        </HStack>
    );
};
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
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

    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.ProfileCardDeprecated, mods, [className])}
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
});
