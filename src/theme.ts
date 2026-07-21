import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// extendThem: 설정을 받아서 차크라ui용 테마객체를 만드는 함수
// type ThemeConfig 올바른 형식인지 검사하는 ???

// 다크모드 기본값 설정(화면 전환과는 상관없이 설정된 화면(다크인지 화이트인지)을 저장, 유지하여 브라우저에 계속 적용하는게 목적)
// .ts 파일은 화면을 만들지 않고, 계산·데이터 처리·설정 같은 기능만 작성
// .tsx 파일은 React에서 화면에 표시할 요소가 포함된 코드(jsx를 사용(html비슷한거))

const config:ThemeConfig = { // 이 함수에서 저장되는 객체는 ThemeConfig의 형식을 따라야함
    initialColorMode:"light",
    useSystemColorMode:false, // 유저가 개별 설정한 시스템의 모드를 따를지 여부
}

const theme = extendTheme({config}); // 차크라 ui의 기본 설정을 config에서 설정한 항목에 한해 내용을 수정하는것

export default theme;