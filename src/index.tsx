import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Root from './components/Root';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); // public.html에서 id가 root인 element를 가져와서 react가 해당 element에 react화면이 들어갈 시작점으로 만든다. 해당결과를 root라는 변수로 저장한다
root.render( // public.html의 id root의 공간에 다음 react component들을 표시한다는 의미
  <React.StrictMode> {/*개발중에 잘못 작성된 React 코드나 문제가 될 가능성이 있는 코드를 검사하고 경고해 주는 도구, App을 실행하되, 개발 중에 문제가 있는지도 추가로 검사하라는 의미*/}
    <ChakraProvider>
      {/*내부에 들어 있는 모든 React 컴포넌트에 Chakra UI의 디자인 설정을 제공합니다. Root.tsx내부에 import한 모든 Chakra 부품에 공통 디자인 환경을 제공하기 때문에 감싸는 것*/}
      <RouterProvider router={router} />
    
      {/* <Root /> Root.tsx에 작성된 가장 상위 React 컴포넌트 */}
    </ChakraProvider>
  </React.StrictMode>
);
