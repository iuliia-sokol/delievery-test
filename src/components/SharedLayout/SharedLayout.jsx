import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { FooterComp } from 'components/Footer/Footer';
import { HeaderComp } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

import { SharedLayoutConteiner } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <SharedLayoutConteiner>
      <HeaderComp />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <FooterComp />
    </SharedLayoutConteiner>
  );
};

export default SharedLayout