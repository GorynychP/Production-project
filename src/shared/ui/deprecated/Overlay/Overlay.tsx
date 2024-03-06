import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const Overlay = ({ className, onClick }: OverlayProps) => {
    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        ></div>
    );
};
