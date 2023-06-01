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

export const NavLinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    margin-left: 180px;
    margin-right: 220px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.main};
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.subheader};
  color: ${p =>
    p.selection === 'true'
      ? p.theme.colors.mainAccent
      : p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.mainAccent};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.headerLinks};
  }

  & span {
    display: flex;

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${p =>
      p.selection === 'true'
        ? p.theme.colors.mainAccent
        : p.navcolor === 'light'
        ? p.theme.colors.mainDark
        : p.theme.colors.userName};

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;

