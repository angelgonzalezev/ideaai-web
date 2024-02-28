import { AuthProvider } from './context/authContext';

function App() {
	return (
		<AuthProvider>
			<div className='App'>
				<header className='App-header'></header>
			</div>
		</AuthProvider>
	);
}

export default App;
