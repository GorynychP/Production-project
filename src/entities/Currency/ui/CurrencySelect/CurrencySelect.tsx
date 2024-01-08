import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

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
	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency);
	}, []);
	return (
		<Select
			label={t('Валюта')}
			value={value}
			onChange={onChangeHandler}
			options={options}
			readonly={readonly}
			className={classNames('', {}, [className])}
		/>
	);
});
