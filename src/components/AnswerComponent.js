import { Card, CardBody, Text } from '@chakra-ui/react';

const AnswerComponent = ({ answer }) => {
	return (
		<Card maxW='70%' alignSelf='end' bgColor={'green.400'}>
			<CardBody>
				<Text fontWeight='bold'>You</Text>
				<Text>{answer}</Text>
			</CardBody>
		</Card>
	);
};
export default AnswerComponent;
