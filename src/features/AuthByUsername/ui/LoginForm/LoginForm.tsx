import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../model/slice/loginSlice';
import {
	getLoginUsername,
	getLoginError,
	getLoginLoading,
	getLoginPassword,
	getLoginEmail,
} from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const email = useSelector(getLoginEmail);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginLoading);
	const error = useSelector(getLoginError);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginAction.setUsername(value));
		},
		[dispatch],
	);
	const onChangeEmail = useCallback(
		(value: string) => {
			dispatch(loginAction.setEmail(value));
		},
		[dispatch],
	);
	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginAction.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Форма авторизации')} />
			{error && (
				<Text
					text={t('Вы ввели неверный логин или пароль')}
					theme={TextTheme.ERROR}
				/>
			)}
			<Input
				autofocus
				type="text"
				className={cls.input}
				placeholder={t('Введите username')}
				onChange={onChangeUsername}
				value={username}
			/>
			{/* <Input
				autofocus
				type="text"
				className={cls.input}
				placeholder={t('Введите email')}
				onChange={onChangeEmail}
				value={email}
			/> */}
			<Input
				type="text"
				className={cls.input}
				placeholder={t('Введите пароль')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={cls.loginBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});
