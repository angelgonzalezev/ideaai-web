import {
	Button,
	Box,
	Container,
	Text,
	Stack,
	VisuallyHidden,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const FooterComponent = () => {
	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Text>© 2022 Chakra Templates. All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'https://twitter.com/angelgonzaleh'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'GitHub'} href={'https://github.com/angelgonzalezev'}>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
};

const SocialButton = ({ children, label, href }) => {
	return (
		<Button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={12}
			h={12}
			cursor={'pointer'}
			as={'a'}
			href={href}
			target='_blank'
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</Button>
	);
};

export default FooterComponent;
