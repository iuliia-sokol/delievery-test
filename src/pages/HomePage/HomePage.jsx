import { Container } from "components/Container/Container";
import { MainWrapper, ProductCard, ProductData, ProductImg, ProductsList, ProductsPanel, ShopLogoImg, ShopTab, ShopsList, ShopsPanel } from "./HomePage.styled";
import { useEffect, useState } from "react";

import defaultShopLogo from '../../images/defaultShopLogo.png'
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "redux/shops/shopsOperations";
import { getShopsList } from "redux/shops/shopsSelectors";
import { BASE_URL } from 'utils/consts';
import { Button } from "components/Button/Button";

const HomePage = () => {
const dispatch = useDispatch();
const [shops, setShops] = useState([])
const [currentShop, setCurrentShop] = useState(null)
const shopsArr = useSelector(getShopsList)



useEffect(() => {
  dispatch(getShops());
  
}, [dispatch]);

useEffect(()=>{
  if(shopsArr.length>0){
     setShops(shopsArr)
     setCurrentShop(shopsArr[0])
    }
},[shopsArr])

const onShopTabClick = (shopId) => {
  const selectedShop = shops.find(shop => shop._id === shopId)
  setCurrentShop(selectedShop)
}

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

                      <ProductCard>
                      <ProductImg
                      src={item.pictureURL ? `${BASE_URL}/${item.pictureURL}`: defaultShopLogo} alt="shop logo"/>
                     <ProductData>
                     <h4>{item.name}</h4>
                     <p>{item.description}</p>
                     </ProductData>
                      <Button text='Add to cart'/>

                      </ProductCard>
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