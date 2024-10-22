import { Card, CardBody, Text } from '@chakra-ui/react';

const QuestionComponent = ({ question }) => {
	return (
		<Card>
			<CardBody>
				<Text>IDEAAI Assistant</Text>
				<Text>{question}</Text>
			</CardBody>
		</Card>
	);
};
export default QuestionComponent;
