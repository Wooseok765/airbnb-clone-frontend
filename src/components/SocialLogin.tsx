import { Box, Button, Divider, HStack, VStack, Text} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function SocialLogin() {
    return (
        <Box mb={4}>
            <HStack mt={8} mb={8}>
                <Divider />
                <Text textTransform={"uppercase"} color={"gray.400"} fontSize={"xs"} as="b">Or</Text>
                <Divider />
            </HStack>
            <VStack>
                <Button w="100%" leftIcon={<FaGithub />} colorScheme="purple">Continue with Github</Button>
                <Button w="100%" leftIcon={<RiKakaoTalkFill />} colorScheme="yellow">Continue with Kakao</Button>
            </VStack>
        </Box>
    )
}