import { Container } from "components/Container/Container";
import { MainWrapper, ShopTab, ShopsList, ShopsPanel } from "./HomePage.styled";
import { useEffect, useState } from "react";

import defaultShopLogo from '../../images/defaultShopLogo.png'
import { useDispatch } from "react-redux";

const HomePage = () => {
const dispatch = useDispatch();
const [shops, setShops] = useState([])


useEffect(() => {
  dispatch(getShops());
}, [dispatch, pageNumber]);


return (
      <Container >
      <MainWrapper>
        <ShopsPanel>
          <ShopsList>
          {shops.map(item => {
                  return (
                    <li key={item._id}>
                      <ShopTab>
                      <img src={item.imgURL ?? defaultShopLogo} alt="shop logo"/>

                      </ShopTab>
                    </li>
                  );
                })}
          </ShopsList>

        </ShopsPanel>

      </MainWrapper>
    
      </Container>
    );
  };
  
  export default HomePage;