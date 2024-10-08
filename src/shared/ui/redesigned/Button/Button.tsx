import React, {
    ButtonHTMLAttributes,
    FC,
    ReactNode,
    ReactElement,
    forwardRef,
    ForwardedRef,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme =
    | 'clear'
    | 'clearInverted'
    | 'outline'
    | 'outline_cancel'
    | 'outline_save'
    | 'background'
    | 'backgroundInverted'
    | 'filled';

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
    fullWidth?: boolean;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
}

export const Button: FC<ButtonProps> = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            theme = 'outline',
            square,
            size = ButtonSize.M,
            disabled,
            fullWidth,
            addonLeft,
            addonRight,
            ...otherProps
        } = props;
        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
        };
        return (
            <button
                className={classNames(cls.Button, mods, [
                    className,
                    cls[theme],
                    cls[size],
                ])}
                disabled={disabled}
                ref={ref}
                {...otherProps}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonRight}>{addonRight}</div>
            </button>
        );
    },
);
