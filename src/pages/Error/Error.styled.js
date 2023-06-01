import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorWrapper = styled.div`
width:100%;
 display:flex; 
 flex-direction:column;
`;

export const TextError = styled.div`
  display:flex; 
 flex-direction:column;
  margin-top: 10vh;
  text-align:center;
  gap: 12px;
  color: ${p => p.theme.colors.mainDark};

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.6;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
color: ${p => p.theme.colors.mainAccent};

`

export const ImgWrapper = styled.div`
  display:flex;
  justify-content:center;
  margin-top:18px;

  img{
     width: 259px;
    }
 

`;