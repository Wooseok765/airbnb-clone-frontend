import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <VStack bg={"yellow"} justifyContent={"center"} minHeight={"100vh"}> {/*component들이 세로로 쌓인다. 수평쌓기는 <HStack>. <div>와 같은 개념이며 내부에 다양한 prop을 넣어 변화시킬 수 있다.  */}
            <Heading>Page not found</Heading>
            <Text>You are lost</Text>
            <Link to={"/"}> {/* path를 설정하여 내부 component를 클릭시 해당 페이지로 이동시킴. 현재는 home url을 연결하였음 */}
                <Button colorScheme="red" variant={"link"}>Go home &rarr;</Button>
            </Link>
        </VStack>
    );
}
// export default : 다른 파일에서 import가능하게함
// 404라는 h1사이즈의 텍스트를 반환하는 function이며 이것을 component로 사용 시 해당 텍스트를 화면에 렌딩할수있음