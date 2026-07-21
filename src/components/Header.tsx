import {
  HStack,
  Box,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  LightMode,
  DarkMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";

import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { Link } from "react-router-dom";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSigninOpen,
    onClose: onSigninClose,
    onOpen: onLSigninOpen,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode(); // useColorMode() provides the two functions
  // toggleColorMode: 사용하여 차크라의 색상모드를 변화시키는 함수(작동하면 그냥 다크모드 되는거) 그리고 작동하며 colorMode의 상태가 변함
  // 지금은 colorMode 사용안하고 useColorModeValue로 더 간단히 사용함(colorMode쓰면 조건문 작성해야함)

  const logoColor = useColorModeValue("red.500", "gold");
  // 첫 번째 인수는 light모드일때, 두 번째는 다크모드일때 반환하는 색상 설정

  const Icon = useColorModeValue(FaMoon, FaSun);

  return (
    <Stack // hstack이나 vstack은 자체적으로 지정된 element 배치 방향이 있어서 direction={{}} 안먹힘
      justifyContent={"space-between"}
      alignItems={"center"}
      py={5}
      px={40}
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={{
        sm: 3,
        md: 0,
      }}
      borderBottomWidth={5}
    >
      {/* 바로 아래 자식 element 단위로 space between이 적용된다 */}
      {/*px:pading(horizental)*/}
      {/*py:pading(vertical)*/}
      {/*p:pading*/}
      <Box color={logoColor}>
        <Link to={"/"}>
          <FaAirbnb size={48} />{" "}
          {/* 이 아이콘은 차크라에서 가져온게 아니기 때문에(react-icon) 다른 문법이 적용됨 그래서 box로 감싸서 box에 prop을 적용하는방식으로 통일성 유지(부모 특성을 물려받기때문에 같은 색상이 됨) */}
        </Link>
      </Box>
      <HStack spacing={"2"}>
        {" "}
        {/* element들 간 간격. rem단위 */}
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        />
        {/* useColorModeValue의 반환값에 따라 아이콘이 바뀜 */}
        {/* aria-label에 있는 글자는 시스템이 읽는 글자(아이콘 버튼은 글자가 없어서 필요함) */}
        <LightMode>
          {" "}
          {/* 버튼에만 라이트모드 유지시키기 */}
          <Button onClick={onLoginOpen} color={"blue.900"} variant={"solid"}>
            Log in
          </Button>
        </LightMode>
        <DarkMode>
          <Button onClick={onLSigninOpen} colorScheme="red" variant={"solid"}>
            Sign out
          </Button>
        </DarkMode>
        {/*color는 글자에만 색상 적용 */}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSigninOpen} onClose={onSigninClose} />
      {/*내부에서 modal이 작동할 때 필요한 값을 보내줌(Root내부의 const에서 받아옴) */}
    </Stack>
  );
}
