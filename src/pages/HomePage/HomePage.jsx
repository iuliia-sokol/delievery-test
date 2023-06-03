import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "components/Container/Container";
import { MainWrapper, ProductCard, ProductData, ProductImg, ProductsList, ProductsPanel, Shop, ShopLogoImg, ShopTab, ShopsList, ShopsPanel } from "./HomePage.styled";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { getShops } from "redux/shops/shopsOperations";
import { getIsShopFetching, getShopsList } from "redux/shops/shopsSelectors";
import { BASE_URL } from 'utils/consts';
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { addToCart } from "redux/cart/cartSlice";
import { getCart } from "redux/cart/cartSelectors";

const HomePage = () => {
const dispatch = useDispatch();
const [shops, setShops] = useState([])
const [currentShop, setCurrentShop] = useState(null)
const [disabled, setDisabled] = useState([])
const loading = useSelector(getIsShopFetching)
const shopsArr = useSelector(getShopsList)
const cart = useSelector(getCart)



useEffect(() => {
  dispatch(getShops());
  
}, [dispatch]);

useEffect(()=>{
  if(shopsArr.length>0){
     setShops(shopsArr)
     setCurrentShop(shopsArr[0])
    }
},[shopsArr])

useEffect(()=>{
  if(cart.length>0){
    const shopId = cart[0].shopId
    const disabledShops = shops.filter(shop => shop._id !== shopId)
    setDisabled(disabledShops)
    }
},[cart, shops])

const onShopTabClick = (shopId) => {
  const selectedShop = shops.find(shop => shop._id === shopId)
  setCurrentShop(selectedShop)


}

return (
      <Container >
    {loading? 
    <Loader/>
:    
    <MainWrapper>
        <ShopsPanel>
          <ShopsList>
          {shops.map(item => {
                  return (
                    <Shop key={item._id} unactive={disabled && (disabled.find(el=>el._id === item._id))? 'true': 'false'} onClick={()=>onShopTabClick(item._id)} style={currentShop && currentShop._id === item._id? {'background': 'hsla(215, 98%, 79%, 0.4)'} : {'background': 'transparent'} }>
                      <ShopTab>
                      <ShopLogoImg
                      src={item.avatarURL ? `${BASE_URL}/${item.avatarURL}`: defaultShopLogo} alt="shop logo"/>
                      <h3>{item.name}</h3>

                      </ShopTab>
                    </Shop>
                  );
                })}
          </ShopsList>
        </ShopsPanel>
        <ProductsPanel>
          <ProductsList>
          {currentShop && currentShop.dishes.map(item => {
                  return (
                    <li key={item.name}>

                      <ProductCard>
                      <ProductImg
                      src={item.pictureURL ? `${BASE_URL}/${item.pictureURL}`: defaultShopLogo} alt="shop logo"/>
                     <ProductData>
                     <h4>{item.name}</h4>
                     <p>{item.description}</p>
                     </ProductData>
                      <Button text={cart.find(el => el.name === item.name)?"In cart":'Add to cart'} onClick={() => 
                       dispatch(addToCart(item))}/>

                      </ProductCard>
                    </li>
                  );
                })}
          </ProductsList>
        </ProductsPanel>

      </MainWrapper>}
    
      </Container>
    );
  };
  
  export default HomePage;