import React, { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardRedesigned.module.scss';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { VStack, HStack } from '@/shared/ui/deprecated/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { ProfileCardProps } from '../../ProfileCard/ProfileCard';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card padding="32" max border="round">
            <VStack max gap="32" justify="center">
                <HStack justify="center" max>
                    <Skeleton width={150} height={150} border="50%" />
                </HStack>

                <HStack gap="32" max justify="center">
                    <VStack gap="28">
                        <Skeleton width={350} height={38} />
                        <Skeleton width={350} height={38} />
                        <Skeleton width={350} height={38} />
                        <Skeleton width={350} height={38} />
                    </VStack>

                    <VStack gap="28">
                        <Skeleton width={350} height={38} />
                        <Skeleton width={350} height={38} />
                        <Skeleton width={350} height={38} />
                        <Skeleton width={350} height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = ({ error }: { error: string }) => {
    const { t } = useTranslation('profile');

    return (
        <Card padding="32" max>
            <HStack
                max
                justify="center"
                className={classNames(cls.ProfileCard, {}, [cls.error])}
            >
                <Text
                    theme="error"
                    align="center"
                    title={t('Произошла ошибка при загрузки профиля:') + error}
                    text={t('Перезагрузитье пожалуйста страницу')}
                />
            </HStack>
        </Card>
    );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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
            gap="32"
            className={classNames(cls.ProfileCardRedesigned, mods, [className])}
        >
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data.avatar} alt="" size={150} />
                </HStack>
            )}
            <HStack gap="32" max justify="center">
                <VStack gap="28">
                    <Input
                        label={t('Имя')}
                        value={data?.first}
                        readonly={readonly}
                        disabled={readonly && true}
                        onChange={onChangeFirstname}
                        data-testid={'ProfileCard.firstname'}
                    />
                    <Input
                        label={t('Фамилия')}
                        value={data?.lastname}
                        disabled={readonly && true}
                        readonly={readonly}
                        onChange={onChangeLastname}
                        data-testid={'ProfileCard.lastname'}
                    />
                    <Input
                        label={t('Возраст')}
                        value={data?.age}
                        disabled={readonly && true}
                        readonly={readonly}
                        onChange={onChangeAge}
                        data-testid={'ProfileCard.age'}
                    />
                    <Input
                        label={t('Город')}
                        value={data?.city}
                        disabled={readonly && true}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />
                </VStack>

                <VStack gap="28">
                    <Input
                        label={t('Имя пользователя')}
                        value={data?.username}
                        disabled={readonly && true}
                        readonly={readonly}
                        onChange={onChangeUsername}
                        data-testid={'ProfileCard.username'}
                    />
                    <Input
                        label={t('Ссылка на аватар')}
                        value={data?.avatar}
                        disabled={readonly && true}
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
            </HStack>
        </VStack>
    );
});
