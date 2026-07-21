import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
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
      <Box>
        <Skeleton rounded={"2xl"} mb={7} w={"100%"} height={280} minH={280} />
        <SkeletonText w={"70%"} noOfLines={2} mb={7} />
        <SkeletonText w={"30%"} noOfLines={1} />
      </Box>
      {/* 로딩용 에니매이션을 가진 컴포넌트 */}
      {/* Room 컴포넌트랑 같은 높이로 맞췄음 */}
      <Room />
    </Grid>
  );
}
