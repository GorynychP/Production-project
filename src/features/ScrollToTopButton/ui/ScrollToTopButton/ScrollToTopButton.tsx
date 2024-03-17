import React, { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import cls from './ScrollToTopButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo(
    ({ className }: ScrollToTopButtonProps) => {
        const circleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        return (
            <Icon
                onClick={circleClick}
                clickable
                Svg={CircleIcon}
                className={classNames(cls.ScrollToTopButton, {}, [className])}
            />
        );
    },
);
