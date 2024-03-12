import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UiDesignedSwitcher.module.scss';
import { memo } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface UiDesignedSwitcherProps {
    className?: string;
}

export const UiDesignedSwitcher = memo((props: UiDesignedSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const items = [
        { content: t('Новый'), value: 'new' },
        { content: t('Старый'), value: 'old' },
    ];
    const onChange = (value: string) => {
        if (authData) {
            dispatch(
                updateFeatureFlag({
                    userId: authData?.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            );
        }
    };
    return (
        <ListBox
            label={t('Вариант интерфейса') + ':'}
            items={items}
            onChange={onChange}
            value={isAppRedesigned ? 'new' : 'old'}
            className={classNames(cls.UiDesignedSwitcher, {}, [className])}
        />
    );
});
