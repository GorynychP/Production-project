import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from '@/widgets/Sidebars';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthInited, userAction } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

const App = () => {
    const { theme } = useTheme();
    const inited = useSelector(getUserAuthInited);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userAction.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
