import styled from "styled-components";

export const Footer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding-top: 18px;
  margin-top: 50px;
  align-self:flex-end;
  text-align:center;
`;

export const CopyrightWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
color: ${p => p.theme.colors.mainDark};
`