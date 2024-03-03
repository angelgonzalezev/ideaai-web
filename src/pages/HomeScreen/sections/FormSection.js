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

const FormComponent = ({ onOpen, onClose, isOpen }) => {
	return (
		<>
			<Modal onClose={onClose} size={'full'} isOpen={isOpen} motionPreset='slideInBottom'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>fvdsvfdsfdsbfdsbfdsbfdsbfdsbf</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default FormComponent;
