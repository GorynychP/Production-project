import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined';
export type CardPadding = '0' | '8' | '16' | '24';
const mapPaddingToClasses: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    max?: boolean;
    padding?: CardPadding;
}

export const Card = ({
    className,
    children,
    theme = 'normal',
    max,
    padding = '0',
    ...otherProps
}: CardProps) => {
    const paddingClass = mapPaddingToClasses[padding];
    return (
        <div
            className={classNames(cls.Card, { [cls.max]: max }, [
                className,
                cls[theme],
                cls[paddingClass],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
