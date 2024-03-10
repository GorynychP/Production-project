import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24' | '32' | '40';
export type CardBorder = 'round' | 'normal';
const mapPaddingToClasses: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
    '32': 'gap_32',
    '40': 'gap_40',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

export const Card = ({
    className,
    children,
    theme = 'normal',
    max,
    padding = '0',
    border = 'normal',
    ...otherProps
}: CardProps) => {
    const paddingClass = mapPaddingToClasses[padding];
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[theme],
                cls[border],
                cls[paddingClass],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
