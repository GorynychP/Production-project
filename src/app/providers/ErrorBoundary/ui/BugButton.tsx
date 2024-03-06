import React, { useEffect, useState } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
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
        <Button theme={ButtonTheme.OUTLINE} onClick={onThrow}>
            {t('Ошибка')}
        </Button>
    );
};
