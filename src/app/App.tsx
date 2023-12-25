import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebars';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';

const App = () => {
	const { theme } = useTheme();
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
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
