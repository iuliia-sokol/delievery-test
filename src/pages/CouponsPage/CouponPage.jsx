import { useState } from "react";

import { Container } from "components/Container/Container";
import { MainWrapper } from "pages/HomePage/HomePage.styled";
import { ButtonCopy, CouponImg, CouponList, CtrlsWrapper } from "./CouponPage.styled";
import { coupons } from "utils/coupons";




const CouponPage = () => {
  const [copied, setCopied] = useState(false)
  const [active, setActive] = useState('')

  const onCopyCodeClick=(item) =>{
    navigator.clipboard.writeText(item.code)
    setCopied(true)
    setActive(item.name)
  }
      return (
        <Container >
         <MainWrapper>
         <CouponList>
         {coupons.map(item => {
                  return (
                    <li key={item.code} >
                      <h3>{item.name}</h3>
                    <CouponImg src={item.imgURL} alt={item.name}/> 
                    <CtrlsWrapper>   
                      <p>{item.code}</p>   
                     <ButtonCopy onClick={()=> onCopyCodeClick(item)}>Copy code</ButtonCopy>
                    </CtrlsWrapper>
                    
                    {copied && active === item.name &&
                     <p>Code copied!</p>}
                 
                    </li>
                  );
                })}
         </CouponList>
         </MainWrapper>
        </Container>
      );
    };
    
    export default CouponPage;