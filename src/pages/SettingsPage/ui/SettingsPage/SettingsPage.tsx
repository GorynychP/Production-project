import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { UiDesignedSwitcher } from '@/features/uiDesignedSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <UiDesignedSwitcher />
            </VStack>
        </Page>
    );
});
export default SettingsPage;
