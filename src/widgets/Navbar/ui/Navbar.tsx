import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from '../../LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isOpenModal, setIsOpenModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);
	const onShowModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);

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
			<LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
		</div>
	);
};
