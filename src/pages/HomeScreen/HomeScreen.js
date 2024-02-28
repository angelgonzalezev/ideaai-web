import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import HeroComponent from '../../components/HeroComponent';
import FooterComponent from '../../components/FooterComponent';

const HomeScreen = () => {
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			// Do something
		}
	}, [user]);

	return (
		<div>
			<HeroComponent />
			<FooterComponent />
		</div>
	);
};

export default HomeScreen;
