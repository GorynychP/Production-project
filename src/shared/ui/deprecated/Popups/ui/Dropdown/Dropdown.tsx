import React, { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../../deprecated/AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}
interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}
/**
Устарел, используем новые компоненты с папки redesigned
 * @deprecated
 */
export function Dropdown(props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom right' } = props;
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button as="div" className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, {
                                [popupCls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
