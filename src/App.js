import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import HomeScreen from './pages/HomeScreen/HomeScreen';

function App() {
	return (
		<AuthProvider>
			<div className='App'>
				<header className='App-header'></header>
			</div>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
