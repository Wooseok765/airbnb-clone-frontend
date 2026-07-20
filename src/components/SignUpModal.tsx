import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, InputGroup, InputLeftElement, Box, Input, Button, useDisclosure } from "@chakra-ui/react";
import { FaAccessibleIcon, FaLock } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { IoMan } from "react-icons/io5";
import SocialLogin from "./SocialLogin";


interface SignUpModalProps {
    // *TypeScript로 정의하는 과정
    isOpen: boolean;
    onClose: () => void; // 반환값이 없는 함수라는 뜻
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
    return (
        <Modal motionPreset="slideInLeft" onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Sign Un Header
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="red">
                                    <FaAccessibleIcon />
                                </Box>
                            } />
                            <Input variant={"filled"} placeholder="Name" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="red">
                                    <SiMinutemailer />
                                </Box>
                            } />
                            <Input variant={"filled"} placeholder="E-mail" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color="red">
                                    <IoMan />
                                </Box>
                            } />
                            <Input variant={"filled"} placeholder="Username" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaLock />} />
                            <Input variant={"filled"} placeholder="Password" />
                        </InputGroup>
                    </VStack>
                    <Button marginTop={4} colorScheme="green" width="100%">LLogg-IIn~</Button>
                    <SocialLogin />

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}