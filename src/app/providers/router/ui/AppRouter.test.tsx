import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('Страница AboutPage должна отрендерить ', async () => {
        componentRender(<AppRouter />, { route: getRouteAbout() });
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('Страница MainPage должна отрендерить ', async () => {
        componentRender(<AppRouter />, { route: getRouteMain() });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Страница ForbiddenPage должна отрендерить ', async () => {
        componentRender(<AppRouter />, { route: getRouteForbidden() });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Редирект неавторизованного пользователя на главную ', async () => {
        componentRender(<AppRouter />, { route: getRouteProfile('1') });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ к закрытой страницы для авторизованного пользователя ', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1', username: 'Ivan' },
                },
            },
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Редирект на ForbiddenPage пользователя без роли', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: { id: '1', username: 'Ivan' },
                },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ к AdminPanelPage открыт пользователю с ролью ', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        id: '1',
                        username: 'Ivan',
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, { route: '/fsdf' });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
});
