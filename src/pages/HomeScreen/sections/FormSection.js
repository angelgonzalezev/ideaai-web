import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';
import FormComponent from '../../../components/FormComponent';
import { questions } from '../../../data';

const FormSection = ({ onClose, isOpen }) => {
	return (
		<>
			<Modal onClose={onClose} size={'full'} isOpen={isOpen} motionPreset='slideInBottom'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader alignSelf={'center'}></ModalHeader>
					<ModalCloseButton />
					<ModalBody alignSelf={'center'}>
						<FormComponent questions={questions} />
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default FormSection;
