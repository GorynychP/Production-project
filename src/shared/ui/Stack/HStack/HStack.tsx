import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
    const { children, align, gap, justify, max = true, className } = props;
    return (
        <Flex
            className={className}
            direction="row"
            justify={justify}
            gap={gap}
            align={align}
            max={max}
        >
            {children}
        </Flex>
    );
};
