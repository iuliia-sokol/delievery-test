import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Formik } from 'formik';
import { Container } from "components/Container/Container";
import { MainWrapper } from "pages/HomePage/HomePage.styled";
import { CartDataWrapper, CartImg, Form, FormWrapper, InputsWrapper, ProductInfoWrapper, ProductPriceWrapper, ProductQuantityWrapper, ProductWrapper, TotalWrapper } from "./CartPage.styled";
import { getCart } from "redux/cart/cartSelectors";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { BASE_URL } from 'utils/consts';
import { Button } from "components/Button/Button";
import { cleanCart, decrementQuantity, incrementQuantity, removeItem } from "redux/cart/cartSlice";
import { setHistory } from "redux/history/historyOperations";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    if(cart.length>0){
      setTotal(cart.reduce((total, item)=>total+(item.price*item.quantity),0))
      }
      if(cart.length<=0){
        setTotal(0)
      }
  },[cart])

  const handleSubmit = ({values, order, total}) => {
    const data = {name:values.name, email:values.email, phone:values.phone, address:values.address, order, total}
    dispatch(cleanCart())
    dispatch(setHistory(data));
    setTotal(0)
  };

    return (
      <Container >
      <MainWrapper>
        <FormWrapper>
        <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
      onSubmit={(values, actions) => {
        handleSubmit({values, order:JSON.stringify(cart), total:total.toString()});
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {props => (
        <Form onSubmit={props.handleSubmit}>
          <InputsWrapper>
            <label htmlFor="name" id="labelName"> Name
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={props.values.name}
                id="name"
                onBlur={() => {
                  props.setTouched({
                    name: true,
                  });
                }}
                onChange={event => {
                  props.setTouched({
                    name: true,
                  });
                  props.setFieldValue('name', event.target.value);
                }}
              />
            </label>
            <label htmlFor="email" id="labelEmail"> Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={props.values.email}
                id="email"
                onBlur={() => {
                  props.setTouched({
                    email: true,
                  });
                }}
                onChange={event => {
                  props.setTouched({
                    email: true,
                  });
                  props.setFieldValue('email', event.target.value);
                }}
              />
            </label>
            <label htmlFor="phone" id="labelPhone"> Phone
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={props.values.phone}
                id="phone"
                onBlur={() => {
                  props.setTouched({
                    phone: true,
                  });
                }}
                onChange={event => {
                  props.setTouched({
                    phone: true,
                  });
                  props.setFieldValue('phone', event.target.value);
                }}
              />
            </label>
            <label htmlFor="address" id="labelAddress"> Address
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={props.values.address}
                id="address"
                onBlur={() => {
                  props.setTouched({
                    address: true,
                  });
                }}
                onChange={event => {
                  props.setTouched({
                    address: true,
                  });
                  props.setFieldValue('address', event.target.value);
                }}
              />
            </label>
            <button
              type="submit"
              disabled={
                !props.values.name || !props.values.email || !props.values.phone || !props.values.address
              }
            >
             Submit
            </button>
          </InputsWrapper>
        </Form>
      )}
    </Formik>
        </FormWrapper>
        <CartDataWrapper> 
         {cart.length<=0 ? <p>Cart is empty</p>:
          <ul>
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
          </ul>}
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