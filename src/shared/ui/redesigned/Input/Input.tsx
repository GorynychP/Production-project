import React, {
    InputHTMLAttributes,
    ReactElement,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    addonLeft?: ReactElement;
    addonRight?: ReactElement;
    disabled?: boolean;
}
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        disabled,
        ...otherProps
    } = props;
    const refInput = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            refInput.current?.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };
    return (
        <HStack gap="12" align="center">
            {label && <Text className={cls.label} text={label + ':'} />}
            <div className={classNames(cls.InputWrapper, mods, [className])}>
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={refInput}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    readOnly={readonly}
                    disabled={disabled}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
        </HStack>
    );
});
