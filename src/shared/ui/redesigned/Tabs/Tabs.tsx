import React, { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
export interface TabItem {
    value: string;
    content: ReactNode;
}
interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = (props: TabsProps) => {
    const { className, onTabClick, tabs, value, direction = 'row' } = props;
    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );
    return (
        <Flex
            direction={direction}
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map(tab => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        key={tab.value}
                        className={classNames(cls.tab, {
                            [cls.selected]: isSelected,
                        })}
                        theme={isSelected ? 'light' : 'normal'}
                        onClick={clickHandle(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};
