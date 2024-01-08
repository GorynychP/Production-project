import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileError, getProfileReadonly } from 'entities/Profile/model/selectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileAction, updateProfileData } from 'entities/Profile';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
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
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Text title={t('Профиль')} />
			{readonly ? (
				<Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
					{t('Редактировать')}
				</Button>
			) : (
				<>
					<Button
						onClick={onSava}
						className={cls.cancelBtn}
						theme={ButtonTheme.OUTLINE}
					>
						{t('Сохранить')}
					</Button>
					<Button
						onClick={onCancelEdit}
						className={cls.saveBtn}
						theme={ButtonTheme.OUTLINE_RED}
					>
						{t('Отменить')}
					</Button>
				</>
			)}
		</div>
	);
};
