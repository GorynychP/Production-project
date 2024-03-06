import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-roller', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
