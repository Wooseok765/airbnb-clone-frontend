import { Grid } from "@chakra-ui/react";
import Room from "../components/Room";
// 홈 화면에 거래 가능한 방들을 띄워두고 보여주는것
export default function Home() {
  // Home이라는 페이지를 담당하는 component
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={2}
      rowGap={8}
      templateColumns={{
        sm: "1fr", //휴대폰 사이즈에 적용(라기보단 모바일 사이즈를 먼저 구현 후 데스크톱을 구현하는것 뿐)
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)", // 수치로 화면크기를 지정했기에 str로 작성
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        (index) => (
          <Room key={index} /> // key 별로 구분하여 Room component를 만들고 랜더함(map과 연결된 어레이의 element 숫자만큼 실행, 그 숫자들이 index임)
        ),
      )}
    </Grid>
  );
}
