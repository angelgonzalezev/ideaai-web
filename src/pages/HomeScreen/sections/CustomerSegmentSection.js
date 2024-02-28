import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	HStack,
	VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const features = [
	{
		id: 1,
		title: 'Business Consultants',
		text: 'Make your brainstorming process more efficient, enhance the quality of your output, and wow your clients by instantly creating detailed business model canvases.',
	},
	{
		id: 2,
		title: 'Investors & Venture Capitalists',
		text: 'Comprehend the revenue structures of possible investment opportunities and proceed with well-informed choices using detailed business model frameworks.',
	},
	{
		id: 3,
		title: 'Freelancers & Solopreneurs',
		text: 'Refine your business framework. Grasp your unique value, target audience, distribution methods, and income sources more comprehensively.',
	},
	{
		id: 4,
		title: 'Startup Founders',
		text: 'Tackle the difficulties that come with starting a business. Use our instrument to swiftly evolve and adjust your business strategy as you expand and make changes.',
	},
	{
		id: 5,
		title: 'Business Professors & Students',
		text: 'Use our tool as a learning resource. Improve the learning experience with real-world business model examples.',
	},
	{
		id: 6,
		title: 'Coaches',
		text: 'Provide your clients with the latest technology for business planning. Enhance their ability to create business models in a more effective and influential way.',
	},
	{
		id: 7,
		title: 'Innovation Teams',
		text: 'Accelerate the creation and prototyping of new business models using Convoboss. In bigger companies, our tool helps in rapidly producing and evaluating fresh business ideas.',
	},
	{
		id: 7,
		title: 'Incubators & Accelerators',
		text: 'Boost the development of the startups you oversee. Employ our artificial intelligence tool to assist them in swiftly creating, polishing, and modifying their business strategies, fostering creativity and achievement.',
	},
];

const CustomerSegmentSection = () => {
	return (
		<Box p={4}>
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				<Heading fontSize={'3xl'}>{"Who's it for?"}</Heading>
				<Text color={'gray.600'} fontSize={'xl'}>
					Mixing up the biz planning game for everyone, everywhere, with some smart AI
					that cranks out Business Model Canvases.
				</Text>
			</Stack>

			<Container maxW={'6xl'} mt={10}>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
					{features.map(feature => (
						<HStack key={feature.id} align={'top'}>
							<Box color={'green.400'} px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<VStack align={'start'}>
								<Text fontWeight={600}>{feature.title}</Text>
								<Text color={'gray.600'}>{feature.text}</Text>
							</VStack>
						</HStack>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};

export default CustomerSegmentSection;
