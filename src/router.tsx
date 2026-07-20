import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
    // url 마다 어떤 component를 보여줄지 설정 (연결규칙)
    // route들을 모아 현재 url에 맞는 화면을 결정하는 관리자
    {
        path: "/",
        element: <Root />,
        errorElement:<NotFound />, //페이지가 없을 때 NotFound라는 component를 사용한다는 의미
        children: [
            {
                path: "",
                element: <Home /> /*Home이라는 route(일종을 컴포넌트, 특정 url을 담당한다)를 Root라는 component(공통 레이아웃) 내부에 삽입하는것 */
            },
            
        ]
    }
])

export default router;