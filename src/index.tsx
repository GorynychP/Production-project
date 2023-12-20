import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

import './shared/config/i18n/i18n';
import 'app/styles/index.scss';
render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById('root'),
);

// import ReactDOM from 'react-dom/client';
// import App from './app/App';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
// import { BrowserRouter } from 'react-router-dom';

// // import './shared/config/i18n/i18n';

// ReactDOM.createRoot(document.getElementById('root')!).render(
// 	<BrowserRouter>
// 		<ThemeProvider>
// 			<App />
// 		</ThemeProvider>
// 	</BrowserRouter>,
// );
