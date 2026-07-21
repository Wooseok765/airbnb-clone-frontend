import {
  VStack,
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.500", "gray.300"); // 모드에 따라 텍스트색상 정하기
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} mb={3} rounded={"2xl"} overflow={"hidden"}>
        <Image
          minH="280"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwQ9bAiFTT6Gnjs3a8Gu8jbRlD_LVf7R20YO5Q1DUPg&s=10"
        />
        <Button
          variant={"unstyled"}
          cursor={"pointer"}
          position={"absolute"}
          top={2}
          right={0}
          color={"whiteAlpha.900"}
        >
          <FaRegHeart size={"20px"} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"3fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>
            Tiny home in Killarney, Ireland
          </Text>
          <HStack spacing={4}>
            <FaStar size={15} />
            <Text>5.5</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          Dublin, Ireland
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>€72</Text> / Night
      </Text>
    </VStack>
  );
}
