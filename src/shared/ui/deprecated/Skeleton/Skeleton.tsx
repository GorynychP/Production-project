import React, { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    border?: string;
}
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export const Skeleton = (props: SkeletonProps) => {
    const { className, border, height, width } = props;
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};
