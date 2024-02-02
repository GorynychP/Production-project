import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { children, align, gap, justify, className, max = true } = props;
    return (
        <Flex
            className={className}
            direction="column"
            justify={justify}
            gap={gap}
            align={align}
            max={max}
        >
            {children}
        </Flex>
    );
};
