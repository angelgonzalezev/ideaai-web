import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	Stack,
	Box,
	Text,
} from '@chakra-ui/react';
import { questions } from '../../../data';
import { useEffect, useState } from 'react';
import { generateAIResponse } from '../../../services/formService';
import Sidebar from '../components/Sidebar';
import QuestionComponent from '../../../components/QuestionComponent';
import AnswerComponent from '../../../components/AnswerComponent';

// const questions = [
// 	'What is your value proposition?',
// 	'Who are your key partners?',
// 	'What are your key activities?',
// 	'What are your key resources?',
// 	'What is your customer relationship strategy?',
// 	'Which channels will you use to reach customers?',
// 	'Who are your customer segments?',
// 	'What is your cost structure?',
// 	'What are your revenue streams?',
// ];

const ChatSection = ({ onClose, isOpen }) => {
	const [response, setResponse] = useState('');
	const [dialog, setDialog] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [index, setIndex] = useState(questions[0].id);
	const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

	const onSubmitAnswer = id => {
		setCurrentQuestion(questions[index + 1]);
		setResponse('');
		setIndex(index + 1);
		const _question = questions.filter(item => item.id === id)[0];
		_question.answer = response;
		setDialog(dialog.concat(_question));
	};

	const renderQuestions = _questions => {
		return (
			<>
				{_questions.map((question, index) => {
					return (
						<Stack key={index} justifyContent='space-between' h='100%'>
							<Stack>
								<QuestionComponent question={question?.question} />
								<AnswerComponent answer={question.answer} />
							</Stack>
						</Stack>
					);
				})}
			</>
		);
	};

	const renderChat = () => (
		<Stack h='100%' flexDir='column' justifyContent='space-between'>
			<Stack w='100%'>
				{dialog.length > 0 && renderQuestions(dialog)}
				<QuestionComponent question={currentQuestion.question} />
				{response ? <AnswerComponent answer={response} /> : null}
			</Stack>
			<Stack flexDir='row' w='100%'>
				<Input
					type='text'
					placeholder='Enter your response'
					value={response}
					onChange={e => setResponse(e.target.value)}
					mb={2}
				/>
				<Button onClick={() => onSubmitAnswer(index)} disabled={!response}>
					Submit
				</Button>
			</Stack>
		</Stack>
	);

	return (
		<>
			<Modal
				onClose={onClose}
				size={'full'}
				isOpen={isOpen}
				motionPreset='slideInBottom'
				h='100%'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody alignSelf={'center'} w='100%' m='0' p='0'>
						<Sidebar>{renderChat()}</Sidebar>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default ChatSection;
