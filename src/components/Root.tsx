import { Outlet } from "react-router-dom";
// 여러 페이지에 공통적으로 적용되는 구조를 담당(레이아웃). Header, footer같은 부분
export default function Root(){
    return <h1>Im root
        <Outlet /> {/*root의 중앙에 렌더링 하녀는 컴포넌트를 위치시키는것        
        즉 router에서 chiledren으로 등록한 component들을, 해당하는 url로 접근하면, root의 중간에 렌더링 한다는 의미 */}
    </h1>;
}