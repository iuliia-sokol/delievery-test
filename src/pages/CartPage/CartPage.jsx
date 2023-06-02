import { useDispatch, useSelector } from "react-redux";

import { Container } from "components/Container/Container";
import { MainWrapper } from "pages/HomePage/HomePage.styled";
import { CartDataWrapper, CartImg, Form, FormWrapper, ProductInfoWrapper, ProductPriceWrapper, ProductQuantityWrapper, ProductWrapper, TotalWrapper } from "./CartPage.styled";
import { getCart } from "redux/cart/cartSelectors";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { BASE_URL } from 'utils/consts';
import { Button } from "components/Button/Button";
import { decrementQuantity, incrementQuantity, removeItem } from "redux/cart/cartSlice";
import { useEffect, useState } from "react";



const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    if(cart.length>0){
      setTotal(cart.reduce((total, item)=>total+(item.price*item.quantity),0))
      }
  },[cart])

    return (
      <Container >
      <MainWrapper>
        <FormWrapper>
          <Form>


          </Form>
        </FormWrapper>
        <CartDataWrapper>
        {cart.map(item => {
                  return (
                    <li key={item.name} >
                      <ProductWrapper>
                        <ProductInfoWrapper> 
                          <CartImg src={item.pictureURL ? `${BASE_URL}/${item.pictureURL}`: defaultShopLogo} alt="shop logo"/>
                          <h5>{item.name}</h5>
                      </ProductInfoWrapper>
                      <ProductQuantityWrapper>
                      <Button text='-' location='cart' onClick={() => 
                       dispatch(decrementQuantity(item.name))} />
                      <p>{item.quantity}</p>
                      <Button text='+' location='cart' onClick={() => 
                       dispatch(incrementQuantity(item.name))} />
                      </ProductQuantityWrapper>

                      <ProductPriceWrapper>
                      {item.price * item.quantity}
                      </ProductPriceWrapper>
                     
                      <Button text='Remove' location='cart' onClick={() => 
                       dispatch(removeItem(item.name))} />
                      </ProductWrapper>
                      
  
                    </li>
                  );
                })}
                <TotalWrapper>
                  <p>Total:</p>
                  <p>{total} UAH</p>
                  </TotalWrapper>
        </CartDataWrapper>
      </MainWrapper>
      </Container>
    );
  };
  
  export default CartPage;