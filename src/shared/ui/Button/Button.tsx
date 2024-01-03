import React, { memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	children: ReactNode;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
}
export const Button: FC<ButtonProps> = memo((props) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props;
	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};
	return (
		<button
			className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
