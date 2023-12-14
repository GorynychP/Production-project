import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();
	const onThrow = () => setError(true);
	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);
	return (
		<Button theme={ThemeButton.OUTLINE} onClick={onThrow}>
			{t('Ошибка')}
		</Button>
	);
};
