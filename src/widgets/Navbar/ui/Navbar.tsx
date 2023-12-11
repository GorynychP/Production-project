import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { LangSwitcher } from '../../LangSwitcher/ui/LangSwitcher';

interface NavbarProps {
	className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<LangSwitcher className={cls.lang} />
			<div className={cls.links}>
				<AppLink
					to="/"
					className={cls.mainLink}
					theme={AppLinkTheme.SECONDARY}
				>
					<h1>{t('Главная')}</h1>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to="/about"
					className={cls.mainLink}
				>
					<h1>{t('О сайте')}</h1>
				</AppLink>
			</div>
		</div>
	);
};
