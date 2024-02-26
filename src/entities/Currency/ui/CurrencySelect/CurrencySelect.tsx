import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}
const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );
    return (
        <ListBox
            label={t('Валюта')}
            items={options}
            value={value}
            className={className}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
        // <Select
        //     label={t('Валюта')}
        //     value={value}
        //     onChange={onChangeHandler}
        //     options={options}
        //     readonly={readonly}
        //     className={classNames('', {}, [className])}
        // />
    );
});
