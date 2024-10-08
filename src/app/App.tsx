import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from '@/widgets/Sidebars';
import { useSelector } from 'react-redux';
import { getUserAuthInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppToolbar } from './lib/useAppToolbar';

const App = () => {
    const { theme } = useTheme();
    const inited = useSelector(getUserAuthInited);
    const dispatch = useAppDispatch();
    const toolbar = useAppToolbar();
    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);
    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
