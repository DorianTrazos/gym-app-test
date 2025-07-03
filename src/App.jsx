import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './lib/providers/Auth.provider';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
