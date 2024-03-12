import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { User } from '@/entities/User';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    authData: User;
    createdAt: string;
    views: number;
    isEdit?: boolean;
    onClick: () => void;
}

export const ArticleAdditionalInfo = memo(
    ({
        className,
        authData,
        createdAt,
        views,
        onClick,
        isEdit,
    }: ArticleAdditionalInfoProps) => {
        const { t } = useTranslation();

        return (
            <VStack
                gap="24"
                // align="center"
                className={classNames(cls.ArticleAdditionalInfo, {}, [
                    className,
                ])}
            >
                <HStack justify="center" gap="8">
                    <Avatar src={authData.avatar} size={32} />
                    <Text text={authData.username} />
                    <Text text={createdAt} />
                </HStack>
                {isEdit ? (
                    <Button onClick={onClick}>{t('Редактировать')}</Button>
                ) : null}
                <Text text={t('{{count}} просмотров', { count: views })} />
            </VStack>
        );
    },
);
