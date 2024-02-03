import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { ListBox } from 'shared/ui/ListBox/ListBox';
const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <div>{t('Главная страница')}</div>
            <BugButton />
            <ListBox
                items={[
                    { value: '1', content: 'Контент1' },
                    { value: '2', content: 'Контент2' },
                    { value: '3', content: 'Контент3' },
                    { value: '4', content: 'Контент4', disabled: true },
                ]}
                // onChange={(value: string) => {}}
                value={undefined}
                defaultValue="Название по дефпвапавп"
            ></ListBox>
        </Page>
    );
};

export default MainPage;
