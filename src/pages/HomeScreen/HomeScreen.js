import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import HeroSection from './sections/HeroSection';
import CustomerSegmentSection from './sections/CustomerSegmentSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FooterComponent from '../../components/FooterComponent';
import UseCasesSection from './sections/UseCasesSection';
import FormSection from './sections/FormSection';
import NavBar from './sections/NavBar';
import { useDisclosure } from '@chakra-ui/react';
import PriceSection from './sections/PriceSection';
import ChatSection from './sections/ChatSection';

const HomeScreen = () => {
	const { user } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		if (user) {
			// Do something
		}
	}, [user]);

	return (
		<div>
			<NavBar onCreateHandle={onOpen} />
			<HeroSection onCreateHandle={onOpen} />
			<CustomerSegmentSection />
			<HowItWorksSection />
			<UseCasesSection />
			<PriceSection />
			<FooterComponent />
			{/* <FormSection isOpen={isOpen} onClose={onClose} /> */}
			<ChatSection isOpen={isOpen} onClose={onClose} />
		</div>
	);
};

export default HomeScreen;
