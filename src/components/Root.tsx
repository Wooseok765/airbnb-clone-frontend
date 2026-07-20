import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

// 여러 페이지에 공통적으로 적용되는 구조를 담당(레이아웃). Header, footer같은 부분
export default function Root() {
    
    {/* useDisclosure 내부에서 관리하는 isOpen 상태를 onOpen은 true로, onClose는 false로 변경한다.*/ }
    return (
        <Box>
            <Header /> {/* header와 헤더 내부 버튼 누를때 작동하는 modal 등 nested하게 기능들을 묶어서 한 번에 표시함  */}
            <Outlet /> {/* Root는 Header처럼 여러 페이지에 공통으로 보이는 부분을 렌더링하고, Outlet은 router.tsx의 children에 등록된 컴포넌트가 표시될 자리를 정한다. 현재 브라우저 URL과 일치하는 자식 Route의 컴포넌트가 Outlet 자리에 들어온다. 예: "/"에서는 Home, "/rooms"에서는 Rooms가 Outlet 자리에 표시된다. */}
        </Box>
    );
}