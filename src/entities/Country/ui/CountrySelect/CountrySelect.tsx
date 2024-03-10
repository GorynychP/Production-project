import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ListBox
                    label={t('Страна')}
                    items={options}
                    value={value}
                    className={className}
                    onChange={onChangeHandler}
                    readonly={readonly}
                    direction="top left"
                />
            }
            off={
                <ListBoxDeprecated
                    label={t('Ваша страна')}
                    items={options}
                    value={value}
                    className={className}
                    onChange={onChangeHandler}
                    readonly={readonly}
                    direction="top right"
                />
            }
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
