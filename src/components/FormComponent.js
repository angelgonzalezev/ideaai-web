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
} from '@chakra-ui/react';

const Form = ({ id, title, question, type, onWrite, value }) => {
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
							name='postal_code'
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
	const [form, setForm] = useState([]);
	const { id, title, question, type } = questions[step - 1];
	const currentProgress = (step * 100) / questions.length;

	const handleOnNext = () => {
		if (currentProgress !== 100) {
			setStep(step + 1);
		} else {
			console.log('Finish');
		}
	};

	const onWrite = data => {
		const _form = [...form];
		const value = data.target.value;
		_form[step - 1] = {
			title,
			question,
			value,
		};
		setForm(_form);
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
			>
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
				<Heading w='100%' textAlign={'center'} fontWeight='normal' mb={6}>
					{"Let's Generate Your Business Model Canvas!"}
				</Heading>
				<Form
					key={id}
					title={title}
					question={question}
					type={type}
					onWrite={value => onWrite(value)}
					value={form[step - 1]?.value}
				/>
				<ButtonGroup mt='5%' w='100%'>
					<Flex w='100%' justifyContent='space-between'>
						<Flex>
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
					</Flex>
				</ButtonGroup>
			</Box>
		</>
	);
};
export default FormComponent;
