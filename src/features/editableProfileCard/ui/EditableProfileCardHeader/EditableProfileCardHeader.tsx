import React, { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getProfileData, getProfileReadonly } from '../../model/selectors';
import { profileAction } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

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
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Профиль')} />
            {permission && (
                <>
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                            data-testid={'EditableProfileCardHeader.EditButton'}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="20" justify="end">
                            <Button
                                onClick={onSava}
                                theme={ButtonTheme.OUTLINE}
                                data-testid={
                                    'EditableProfileCardHeader.SaveButton'
                                }
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_RED}
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
    );
};
