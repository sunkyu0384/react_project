import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); //메인 페이지

/* 회원 페이지 */
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));
/* 회원 페이지*/

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path='member'>
          <Route path='join' element={<Join />} />
            <Route path='login' element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;