import { MainWrapper } from "pages/HomePage/HomePage.styled";
import { CopyrightWrapper, Footer } from "./Footer.styled";

export const FooterComp = () => {

    return (
         
            <Footer>
            <MainWrapper>
                <CopyrightWrapper>
                All rights reserved &#169;
                <br/>
                2023
                </CopyrightWrapper>
            </MainWrapper>
            </Footer>
    );
  };