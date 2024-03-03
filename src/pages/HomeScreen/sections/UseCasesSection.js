import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, VStack } from '@chakra-ui/react';
import {
	MdOutlineElectricCar,
	MdOutlineHealthAndSafety,
	MdEmojiTransportation,
} from 'react-icons/md';
import { CiBank, CiShop } from 'react-icons/ci';
import { BsBuildingGear } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GiMoneyStack, GiReceiveMoney } from 'react-icons/gi';
import { SlEnergy } from 'react-icons/sl';
import { CgGames } from 'react-icons/cg';

const industries = [
	{
		id: 1,
		title: 'Automobiles & Components',
		icon: MdOutlineElectricCar,
	},
	{
		id: 2,
		title: 'Banks',
		icon: CiBank,
	},
	{
		id: 3,
		title: 'Capital Goods',
		icon: BsBuildingGear,
	},
	{
		id: 4,
		title: 'Commercial & Professional Services',
		icon: RiCustomerService2Fill,
	},
	{
		id: 5,
		title: 'Diversified Financials',
		icon: GiMoneyStack,
	},
	{
		id: 6,
		title: 'Energy',
		icon: SlEnergy,
	},
	{
		id: 11,
		title: 'Food & Staples Retailing',
		icon: CiShop,
	},
	{
		id: 21,
		title: 'Health Care Equipment & Services',
		icon: MdOutlineHealthAndSafety,
	},
	{
		id: 31,
		title: 'Media & Entertainment',
		icon: CgGames,
	},
	{
		id: 41,
		title: 'Technology Hardware & Equipment',
	},
	{
		id: 51,
		title: 'Transportation',
		icon: MdEmojiTransportation,
	},
	{
		id: 61,
		title: 'Utilities',
		icon: GiReceiveMoney,
	},
];

const UseCasesSection = () => {
	return (
		<Box p={4} my={32} id='use-cases'>
			<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
				<Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
					Create Business Model Canvases for any industry
				</Heading>
			</Stack>
			<Container maxW={'6xl'} mt={10}>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
					{industries.map(industry => (
						<VStack key={industry.id} align={'center'}>
							<Icon as={industry.icon} w={10} h={10} />
							<Text fontWeight={600} textAlign={'center'}>
								{industry.title}
							</Text>
						</VStack>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};
export default UseCasesSection;
