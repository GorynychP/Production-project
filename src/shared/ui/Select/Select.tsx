import React, { ChangeEvent, useMemo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOptions<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: SelectOptions<T>[];
	value?: T;
	readonly?: boolean;
	onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, readonly, onChange } = props
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }
    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} key={opt.value} value={opt.value}>
                {opt.content}
            </option>
        ))
    }, [options])

    const mods: Mods = {
        [cls.readonly]: readonly
    }

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
    )
}
