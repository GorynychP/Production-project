import React, { useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarRedesigned.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack';
interface SidebarRedesignedProps {
    className?: string;
}

export const SidebarRedesigned = ({ className }: SidebarRedesignedProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map(item => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),

        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapsedBtn}
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack role="navigation" className={cls.items} gap="16">
                {itemsList}
            </VStack>
        </aside>
    );
};
