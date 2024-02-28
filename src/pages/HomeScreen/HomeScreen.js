import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import HeroSection from './sections/HeroSection';
import CustomerSegmentSection from './sections/CustomerSegmentSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FooterComponent from '../../components/FooterComponent';
import NavBar from './sections/NavBar';

const HomeScreen = () => {
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			// Do something
		}
	}, [user]);

	return (
		<div>
			<NavBar />
			<HeroSection />
			<CustomerSegmentSection />
			<HowItWorksSection />
			<FooterComponent />
		</div>
	);
};

export default HomeScreen;
