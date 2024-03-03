import { Box, Container, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { FaWpforms, FaDonate } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Card = ({ heading, description, icon, href }) => {
	return (
		<Box
			maxW={{ base: 'full', md: '275px' }}
			w={'full'}
			borderWidth='1px'
			borderRadius='lg'
			overflow='hidden'
			p={8}
			boxShadow='xl'
			_hover={{
				shadow: 'xl',
				transform: 'translateY(-7px)',
				transitionDuration: '0.4s',
				transitionTimingFunction: 'ease-in-out',
			}}
		>
			<Stack align={'center'} spacing={2}>
				<Flex w={16} h={16} align={'center'} justify={'center'} rounded={'full'}>
					{icon}
				</Flex>
				<Box mt={2}>
					<Heading size='md' textAlign={'center'} mb={4}>
						{heading}
					</Heading>
					<Text mt={1} fontSize={'sm'} textAlign={'center'}>
						{description}
					</Text>
				</Box>
			</Stack>
		</Box>
	);
};

const HowItWorksSection = () => {
	return (
		<Box p={4} my={20} id='how-it-works'>
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				<Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
					How it works?
				</Heading>
			</Stack>

			<Container maxW={'5xl'} mt={8}>
				<Flex flexWrap='wrap' gridGap={12} justify='center'>
					<Card
						heading={'1. Fill in a few details'}
						icon={<Icon as={FaWpforms} w={10} h={10} />}
						description={
							'Complete 7 short queries regarding your enterprise to allow our AI system to construct your business blueprint.'
						}
					/>
					<Card
						heading={'2. Place your order'}
						icon={<Icon as={FaDonate} w={10} h={10} />}
						description={
							'Select the best payment option. We securely handle transactions through Stripe and Cryptocurrencies.'
						}
					/>
					<Card
						heading={'3. Check your inbox'}
						icon={<Icon as={AiOutlineMail} w={10} h={10} />}
						description={
							"We'll send your Business Model Canvas to your email right away, allowing you to distribute it as much as you like!."
						}
					/>
				</Flex>
			</Container>
		</Box>
	);
};

export default HowItWorksSection;
