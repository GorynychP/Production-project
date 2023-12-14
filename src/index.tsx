import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
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
