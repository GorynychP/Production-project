import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebars';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from 'entities/User';
import { AppRouter } from './providers/router';
import { getUserAuthInited } from 'entities/User/model/selectors/getUserAuthInited/getUserAuthInited';

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
