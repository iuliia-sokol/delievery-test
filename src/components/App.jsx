import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { ThemeProvider } from 'styled-components';
import { theme as lightMode, darkTheme as darkMode } from 'utils/theme';
import { getMode } from 'redux/theme/themeSelector';

import SharedLayout from './SharedLayout/SharedLayout';
import Error from 'pages/Error/Error';
import HomePage from 'pages/HomePage/HomePage'
import { useSelector } from 'react-redux';


const CartPage = lazy(() => import('pages/CartPage/CartPage'));
const HistoryPage = lazy(() => import('pages/HistoryPage/HistoryPage'));
const CouponPage = lazy(() => import('pages/CouponsPage/CouponPage'));

export const App = () => {
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index path="/home" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/coupons" element={<CouponPage/>}/>
      </Route>
      <Route path="*" element={<Error />} />
      </Routes>
      </ThemeProvider>
  );
};
