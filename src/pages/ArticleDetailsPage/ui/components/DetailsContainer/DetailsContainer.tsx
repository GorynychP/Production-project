import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DetailsContainer.module.scss';
// import { useTranslation } from 'react-i18next';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo(({ className }: DetailsContainerProps) => {
    // const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.DetailsContainer, {}, [className])}
        ></div>
    );
});
