import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getAuthData/getUserAuthData';
import { userAction } from 'entities/User';

interface NavbarProps {
	className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isOpenModal, setIsOpenModal] = useState(false);
	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);
	const onShowModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);
	const onLogout = useCallback(() => {
		dispatch(userAction.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					className={cls.links}
					onClick={onLogout}
				>
					{t('Выйти')}
				</Button>
			</div>
		);
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<LangSwitcher className={cls.lang} />

			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>
			{isOpenModal && (
				<LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
			)}
		</div>
	);
};
