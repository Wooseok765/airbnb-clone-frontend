import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, InputGroup, InputLeftElement, Box, Input, Button, useDisclosure } from "@chakra-ui/react";
import { FaAccessibleIcon, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";


interface LoginModalProps {
    // *TypeScript로 정의하는 과정
    isOpen: boolean;
    onClose: () => void; // 반환값이 없는 함수라는 뜻
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    // Root.tsx에서 사용될 때 isOpen과 onClose를 받음. 받은 객체는 LoginModalProps의 규칙을 따라야한다고 지정
    return (
        <Modal motionPreset="slideInLeft" onClose={onClose} isOpen={isOpen}>
            {/*로그인의 onClick기능에서 onOpen함수를 활성화 하면 modal의 isOpne의 상태인 boolean값이 변한다(모달(팝업) 켜지고꺼지는 기능의 트리거) */}
            <ModalOverlay /> {/*모달이 켜질 시 백그라운드를 어둡게하는 기능 */}
            <ModalContent>
                <ModalHeader>
                    Log In Header
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <InputGroup>
                            {/*입력창(Input)과 아이콘·문자·버튼 등을 하나의 입력창처럼 묶어 배치하는 컴포넌트 */}
                            <InputLeftElement children={
                                <Box color="red">
                                    <FaAccessibleIcon />
                                    {/* react icon이므로 box로 감싼 후 charkra UI형식으로 색 적용 */}
                                </Box>
                            } />
                            {/*열고닫는 형식으로 만든 뒤 내부에 컴포넌트 넣은것과 똑같은 코드를 더 짧게 작성한것 그래서 children=이 필요. icon을 받도록 설계되지 않았으므로 icon이라는 prop이 없음 */}
                            <Input variant={"filled"} placeholder="Username" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<FaLock />} />
                            <Input variant={"filled"} placeholder="Password" />
                        </InputGroup>
                    </VStack>
                    <Button marginTop={4} colorScheme="green" width="100%">LLogg-IIn~</Button>
                    <SocialLogin /> {/*소셜로그인버튼들을 만들어서 컴포넌트로 붙혀넣기*/}

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}