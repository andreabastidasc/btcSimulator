import React from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

const ModalComponent: React.FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
    return (
        <>
            <Modal
                colorScheme='purple'
                variant='purple'
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme='purple'
                            mr={3}
                            w='100%'
                            onClick={onClose}
                        >
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
  }

export default ModalComponent;