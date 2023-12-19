import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { LangSwitcher } from '../../LangSwitcher/ui/LangSwitcher';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
	className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<LangSwitcher className={cls.lang} />
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isOpen} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
				delectus voluptas ut autem sunt esse architecto tempore repellat
				similique rerum.
			</Modal>
		</div>
	);
};
