import { Container } from "components/Container/Container";
import { MainWrapper, ProductsList, ProductsPanel, ShopLogoImg, ShopTab, ShopsList, ShopsPanel } from "./HomePage.styled";
import { useEffect, useState } from "react";

import defaultShopLogo from '../../images/defaultShopLogo.png'
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "redux/shops/shopsOperations";
import { getShopsList } from "redux/shops/shopsSelectors";
import { BASE_URL } from 'utils/consts';

const HomePage = () => {
const dispatch = useDispatch();
const [shops, setShops] = useState([])
const [products, setProducts] = useState([])
const [currentShop, setCurrentShop] = useState(null)
const shopsArr = useSelector(getShopsList)



useEffect(() => {
  dispatch(getShops());
  
}, [dispatch]);

useEffect(()=>{
  if(shopsArr.length>0){
     setShops(shopsArr)
    }
},[shopsArr])

const onShopTabClick = (shopId) => {
  const selectedShop = shops.find(shop => shop._id === shopId)
  setCurrentShop(selectedShop)
}



console.log(currentShop);

return (
      <Container >
      <MainWrapper>
        <ShopsPanel>
          <ShopsList>
          {shops.map(item => {
                  return (
                    <li key={item._id}  onClick={()=>onShopTabClick(item._id)} style={currentShop && currentShop._id === item._id? {'background': 'hsla(215, 98%, 79%, 0.4)'} : {'background': 'transparent'} }>
                      <ShopTab>
                      <ShopLogoImg
                      src={item.avatarURL ? `${BASE_URL}/${item.avatarURL}`: defaultShopLogo} alt="shop logo"/>
                      <h3>{item.name}</h3>

                      </ShopTab>
                    </li>
                  );
                })}
          </ShopsList>
        </ShopsPanel>
        <ProductsPanel>
          <ProductsList>
          {currentShop && currentShop.dishes.map(item => {
                  return (
                    <li key={item._id}>
                      
                      {/* <ShopTab>
                      <ShopLogoImg
                      src={item.avatarURL ? `${BASE_URL}/${item.avatarURL}`: defaultShopLogo} alt="shop logo"/>
                      <h3>{item.name}</h3>

                      </ShopTab> */}
                    </li>
                  );
                })}
          </ProductsList>
        </ProductsPanel>

      </MainWrapper>
    
      </Container>
    );
  };
  
  export default HomePage;