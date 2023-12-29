import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/types/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true);
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
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
			<div className={cls.items}>
				{SidebarItemsList.map((item) => (
					<SidebarItem key={item.path} item={item} collapsed={collapsed} />
				))}
			</div>
		</div>
	);
};
