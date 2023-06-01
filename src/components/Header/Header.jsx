import { Container } from "components/Container/Container";
// import { useEffect } from "react";
import logo from '../../images/logo.png';
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";
import { Header, HeaderWrapper, LogoWrapper, NavLinkStyled } from "./Header.styled";


export const HeaderComp = () => {

    return (
          <Header>
            <Container>
              <HeaderWrapper>
                <LogoWrapper>
                  <NavLinkStyled to="/main">
                    <img src={logo} alt="logo" />
                  </NavLinkStyled>
                </LogoWrapper>
               
                <ThemeToggler />
              </HeaderWrapper>
            </Container>
          </Header>
    );
  };