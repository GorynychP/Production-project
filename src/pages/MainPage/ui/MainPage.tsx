import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './MainPage.module.scss';
import { Dropdown, ListBox } from 'shared/ui/Popups';
const MainPage = () => {
    const { t } = useTranslation('main');
    const authData = useSelector(getUserAuthData);
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
            <Dropdown
                className={cls.dropdown}
                trigger={<Button>Меню</Button>}
                items={[
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData?.id,
                    },
                    { content: t('Выйти'), onClick: () => {} },
                ]}
                direction="bottom right"
            />
        </Page>
    );
};

export default MainPage;
