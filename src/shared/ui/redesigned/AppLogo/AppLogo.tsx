import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../../deprecated/Stack';
import AppSvg from '@/shared/assets/icons/icon-location.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 85 }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg width={size} height={size} className={cls.appLogo} />
        </HStack>
    );
});
