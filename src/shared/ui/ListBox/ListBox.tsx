import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import { DropdownDirection } from 'shared/types/ui';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}
const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

interface ListBoxProps {
    items: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        defaultValue,
        onChange,
        value,
        label,
        readonly,
        direction = 'bottom right',
    } = props;
    const optionsClasses = [mapDirectionClass[direction]];
    return (
        <HStack
            gap="4"
            align="center"
            className={classNames('', { [cls.readonly]: readonly })}
        >
            {label && <span className={cls.label}>{`${label} >`}</span>}
            <HListBox
                as={'div'}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map(item => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
