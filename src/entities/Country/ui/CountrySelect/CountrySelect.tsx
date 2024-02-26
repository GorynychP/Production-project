import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Turkey, content: Country.Turkey },
];

export const CountrySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );
    return (
        <ListBox
            label={t('Ваша страна')}
            items={options}
            value={value}
            className={className}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
        // <Select
        //     label={t('Ваша страна')}
        //     value={value}
        //     onChange={onChangeHandler}
        //     options={options}
        //     readonly={readonly}
        //     className={classNames('', {}, [className])}
        // />
    );
});
