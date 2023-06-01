import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  box-sizing: border-box;
  z-index: 10;
  width: 100%;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 18px;

  @media screen and (min-width: 1440px) {
    padding-top: 14px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  & img {
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 44px;
      height: 44px;
    }
  }
`;
