import React, { useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { SidebarRedesigned } from '../SidebarRedesigned/SidebarRedesigned';
interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
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
            }
            on={<SidebarRedesigned />}
        />
    );
};
