import React, {
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props;
	const refInput = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

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
	const onSelect: React.ReactEventHandler<HTMLInputElement> = (e) => {
		setCaretPosition((e?.target as HTMLInputElement)?.selectionStart || 0);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};
	return (
		<div className={classNames(cls.InputWraper, {}, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>{placeholder + '>'}</div>
			)}
			<div className={cls.caretWrapper}>
				<input
					ref={refInput}
					className={cls.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
				/>
				{isFocused && (
					<span
						className={cls.caret}
						style={{ left: `${caretPosition * 8.8}px` }}
					/>
				)}
			</div>
		</div>
	);
});
