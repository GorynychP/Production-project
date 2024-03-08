import React, { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    right?: ReactElement;
    left?: ReactElement;
    content: ReactElement;
}

export const StickyContentLayout = memo(
    ({ className, content, left, right }: StickyContentLayoutProps) => {
        return (
            <div
                className={classNames(cls.StickyContentLayout, {}, [className])}
            >
                {right ? <div className={cls.right}>{right}</div> : null}
                <div className={cls.content}>{content}</div>
                {left ? <div className={cls.left}>{left}</div> : null}
            </div>
        );
    },
);
