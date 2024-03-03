import { useState } from 'react';
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,
	FormLabel,
	SimpleGrid,
	Textarea,
	FormHelperText,
	Input,
	Spinner,
} from '@chakra-ui/react';
import { getSpeech } from '../services/formService';

const Form = ({ id, title, question, type, onWrite, value, inputName }) => {
	return (
		<>
			<SimpleGrid columns={1} spacing={6} key={id}>
				<FormControl id='email' mt={1}>
					<FormLabel
						fontSize='sm'
						fontWeight='md'
						color='gray.700'
						_dark={{
							color: 'gray.50',
						}}
					>
						{title}
					</FormLabel>
					{type === 'text' ? (
						<Input
							type='text'
							name={inputName}
							id='postal_code'
							autoComplete='postal-code'
							focusBorderColor='brand.400'
							shadow='sm'
							size='sm'
							w='full'
							rounded='md'
							onChange={value => onWrite(value)}
							value={value}
						/>
					) : (
						<Textarea
							rows={3}
							shadow='sm'
							focusBorderColor='brand.400'
							fontSize={{
								sm: 'sm',
							}}
							onChange={value => onWrite(value)}
							value={value}
							name={inputName}
						/>
					)}
					<FormHelperText>{question}</FormHelperText>
				</FormControl>
			</SimpleGrid>
		</>
	);
};

const FormComponent = ({ questions }) => {
	const [step, setStep] = useState(1);
	const form = {
		name: '',
		description: '',
		target: '',
		geo: '',
	};
	const { id, title, question, type, inputName } = questions[step - 1];
	const currentProgress = (step * 100) / questions.length;
	const [generated, setGenerated] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleOnNext = () => {
		if (currentProgress !== 100) {
			setStep(step + 1);
		} else {
			setLoading(true);
			setGenerated(false);
			getSpeech(form)
				.then(response => {
					console.log('Res', response);
					setLoading(false);
				})
				.catch(e => console.log('Error', e));
		}
	};

	const onWrite = (field, data) => {
		const value = data.target.value;
		form[field] = value;
	};

	return (
		<>
			<Box
				borderWidth='1px'
				rounded='lg'
				shadow='1px 1px 3px rgba(0,0,0,0.3)'
				maxWidth={800}
				p={6}
				m='10px auto'
				as='form'
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				flexDirection={'column'}
			>
				<Box w={'full'}>
					<Progress
						hasStripe
						value={currentProgress}
						mb='5%'
						mx='5%'
						colorScheme='green'
						isAnimated
						border={1}
						borderRadius={'full'}
					/>
				</Box>
				<Heading w='100%' textAlign={'center'} fontWeight='normal' mb={6}>
					{"Let's Generate Your Business Model Canvas!"}
				</Heading>
				{loading ? (
					<Spinner
						thickness='4px'
						speed='1.1s'
						emptyColor='gray.200'
						color='green.500'
						size='xl'
						alignSelf={'center'}
						justifySelf={'center'}
					/>
				) : !generated && !loading ? (
					<>
						<Form
							key={id}
							title={title}
							question={question}
							type={type}
							onWrite={value => onWrite(inputName, value)}
							value={form[step - 1]?.value}
							inputName={inputName}
						/>
						<ButtonGroup mt='5%' w='100%'>
							<Flex w='100%' justifyContent='space-evenly'>
								<Button
									onClick={() => {
										setStep(step - 1);
									}}
									isDisabled={step === 1}
									colorScheme='teal'
									variant='solid'
									w='7rem'
									mr='5%'
								>
									Back
								</Button>
								<Button
									w='7rem'
									onClick={handleOnNext}
									colorScheme='teal'
									variant='outline'
								>
									{currentProgress === 100 ? 'Finish' : 'Next'}
								</Button>
							</Flex>
						</ButtonGroup>
					</>
				) : null}
			</Box>
		</>
	);
};
export default FormComponent;
