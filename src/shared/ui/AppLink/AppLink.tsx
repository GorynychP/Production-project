import React, { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
	children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY, ...othrProps } = props;
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...othrProps}
		>
			{children}
		</Link>
	);
});
