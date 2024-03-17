import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import cls from './ScrollToolbar.module.scss';
interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => {
    return (
        <VStack
            max
            align="center"
            justify="center"
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
