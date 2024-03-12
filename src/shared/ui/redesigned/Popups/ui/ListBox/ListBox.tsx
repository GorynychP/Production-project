import React, { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
    const selectedItem = useMemo(() => {
        return items?.find(item => item.value === value);
    }, [items, value]);
    return (
        <HStack
            gap="4"
            align="center"
            className={classNames('', { [cls.readonly]: readonly }, [])}
        >
            {label && <span className={cls.label}>{`${label} >`}</span>}
            <HListBox
                as={'div'}
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button as="div" className={popupCls.trigger}>
                    <Button
                        theme="filled"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
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
                                        [popupCls.active]: active,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    })}
                                >
                                    {/* {selected} */}
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
