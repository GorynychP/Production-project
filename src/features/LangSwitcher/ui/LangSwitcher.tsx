import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import cls from './LangSwitcher.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation('main');
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    className={classNames(cls.LangSwitcher, {}, [className])}
                    onClick={toggle}
                    theme="clear"
                >
                    {i18n.language !== 'ru' ? 'RU' : 'EN'}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames(cls.LangSwitcher, {}, [className])}
                    onClick={toggle}
                >
                    {i18n.language !== 'ru' ? 'RU' : 'EN'}
                </ButtonDeprecated>
            }
        />
    );
});
