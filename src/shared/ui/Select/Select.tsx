import React, { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	label?: string;
	options?: SelectOptions[];
	value?: string;
	readonly?: boolean;
	onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
	const { className, label, options, value, readonly, onChange } = props;
	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
	};
	const optionList = useMemo(() => {
		return options?.map((opt) => (
			<option className={cls.option} key={opt.value} value={opt.value}>
				{opt.content}
			</option>
		));
	}, [options]);

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div className={classNames(cls.Wrapper, mods, [className])}>
			{label && <span className={cls.label}>{`${label} >`}</span>}
			<select
				disabled={readonly}
				value={value}
				onChange={onChangeHandler}
				className={cls.select}
			>
				{optionList}
			</select>
		</div>
	);
});
