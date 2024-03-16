import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getProfileData, getProfileReadonly } from '../../model/selectors';
import { profileAction } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeader {
    className?: string;
}

export const EditableProfileCardHeader = ({
    className,
}: EditableProfileCardHeader) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const permission = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const onEdit = useCallback(() => {
        dispatch(profileAction.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileAction.cancelEdit());
    }, [dispatch]);

    const onSava = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max padding="24" border="round">
                    <HStack
                        max
                        justify="between"
                        align="center"
                        className={classNames('', {}, [className])}
                    >
                        <Text title={t('Профиль')} />
                        {permission && (
                            <>
                                {readonly ? (
                                    <Button
                                        onClick={onEdit}
                                        theme="outline"
                                        data-testid={
                                            'EditableProfileCardHeader.EditButton'
                                        }
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack gap="20" justify="end">
                                        <Button
                                            onClick={onSava}
                                            theme="outline_save"
                                            data-testid={
                                                'EditableProfileCardHeader.SaveButton'
                                            }
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                        <Button
                                            onClick={onCancelEdit}
                                            theme="outline_cancel"
                                            data-testid={
                                                'EditableProfileCardHeader.CancelButton'
                                            }
                                        >
                                            {t('Отменить')}
                                        </Button>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    max
                    justify="between"
                    className={classNames('', {}, [className])}
                >
                    <TextDeprecated title={t('Профиль')} />
                    {permission && (
                        <>
                            {readonly ? (
                                <ButtonDeprecated
                                    onClick={onEdit}
                                    theme={ButtonTheme.OUTLINE}
                                    data-testid={
                                        'EditableProfileCardHeader.EditButton'
                                    }
                                >
                                    {t('Редактировать')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="20" justify="end">
                                    <ButtonDeprecated
                                        onClick={onSava}
                                        theme={ButtonTheme.OUTLINE}
                                        data-testid={
                                            'EditableProfileCardHeader.SaveButton'
                                        }
                                    >
                                        {t('Сохранить')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        onClick={onCancelEdit}
                                        theme={ButtonTheme.OUTLINE_RED}
                                        data-testid={
                                            'EditableProfileCardHeader.CancelButton'
                                        }
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </>
                    )}
                </HStack>
            }
        />
    );
};
