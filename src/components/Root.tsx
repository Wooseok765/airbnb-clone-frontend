import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon, FaAccessibleIcon, FaLock } from "react-icons/fa";
// 여러 페이지에 공통적으로 적용되는 구조를 담당(레이아웃). Header, footer같은 부분
export default function Root() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    {/* useDisclosure 내부에서 관리하는 isOpen 상태를 onOpen은 true로, onClose는 false로 변경한다.*/ }
    return (
        <Box>
            <HStack justifyContent={"space-between"} py={5} px={10} borderBottomWidth={5}>
                {/* 바로 아래 자식 element 단위로 space between이 적용된다 */}
                {/*px:pading(horizental)*/}
                {/*py:pading(vertical)*/}
                {/*p:pading*/}
                <Box color={"red.600"}>
                    <FaAirbnb size={48} /> {/* 이 아이콘은 차크라에서 가져온게 아니기 때문에(react-icon) 다른 문법이 적용됨 그래서 box로 감싸서 box에 prop을 적용하는방식으로 통일성 유지(부모 특성을 물려받기때문에 같은 색상이 됨) */}
                </Box>
                <HStack spacing={"2"}> {/* element들 간 간격. rem단위 */}
                    <IconButton variant={"ghost"} aria-label="Toggle dark mode" icon={<FaMoon />} />
                    {/* aria-label에 있는 글자는 시스템이 읽는 글자(아이콘 버튼은 글자가 없어서 필요함) */}
                    <Button onClick={onOpen} color={"blue.900"} variant={"solid"}>Log in</Button>
                    <Button colorScheme="red" variant={"solid"}>Sign out</Button>
                    {/*color는 글자에만 색상 적용 */}
                </HStack>
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
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
            <Outlet /> {/*root의 중앙에 렌더링 하녀는 컴포넌트를 위치시키는것, 즉 router에서 chiledren으로 등록한 component들을, 해당하는 url로 접근하면, root의 중간에 렌더링 한다는 의미 */}
        </Box>
    );
}