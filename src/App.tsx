import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { MainPageAsync } from './page/MainPage/MainPageAsync';
import { AboutPageAsync } from './page/AboutPage/AboutPageAsync';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';

const App = () => {
	const { theme, changeTheme } = useTheme();
	return (
		<div
			className={classNames('app', { hovered: true, aelection: false }, [
				theme,
			])}
		>
			<button style={{ background: 'red' }} onClick={changeTheme}>
				Смена темы
			</button>
			<Link to="/">
				<h1>Главная</h1>
			</Link>
			<Link to="/document">
				<h1>Мои документы</h1>
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/document" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
