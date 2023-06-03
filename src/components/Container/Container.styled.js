
import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 0 16px;
  display:flex;
  flex-direction:column;
height:fit-content;
min-height:70vh;
align-items:stretch;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;