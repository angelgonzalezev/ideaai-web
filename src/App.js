import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import HomeScreen from './pages/HomeScreen/HomeScreen';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
