import styled from "styled-components";

export const SharedLayoutConteiner = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 768px;
  }


  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
  `