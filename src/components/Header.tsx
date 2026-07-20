import { HStack, Box, IconButton, Button, useDisclosure } from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header(){
    const { isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen } = useDisclosure();
    const { isOpen:isSigninOpen, onClose:onSigninClose, onOpen:onLSigninOpen } = useDisclosure();
    return (
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
                    <Button onClick={onLoginOpen} color={"blue.900"} variant={"solid"}>Log in</Button>
                    <Button onClick={onLSigninOpen} colorScheme="red" variant={"solid"}>Sign out</Button>
                    {/*color는 글자에만 색상 적용 */}
                </HStack>
                <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
                <SignUpModal isOpen={isSigninOpen} onClose={onSigninClose} />
                {/*내부에서 modal이 작동할 때 필요한 값을 보내줌(Root내부의 const에서 받아옴) */}
            </HStack>
    )
}