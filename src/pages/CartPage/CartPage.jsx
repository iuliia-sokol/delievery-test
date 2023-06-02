import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { Container } from "components/Container/Container";
import { MainWrapper } from "pages/HomePage/HomePage.styled";
import { CartDataWrapper, CartImg, Form, FormWrapper, InputsWrapper, ProductInfoWrapper, ProductPriceWrapper, ProductQuantityWrapper, ProductWrapper, TotalWrapper } from "./CartPage.styled";
import { getCart } from "redux/cart/cartSelectors";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { BASE_URL } from 'utils/consts';
import { Button } from "components/Button/Button";
import { decrementQuantity, incrementQuantity, removeItem } from "redux/cart/cartSlice";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 letters')
    .max(16, 'Name must contain maximum 16 letters')
    .matches(
      /^[ыЫа-яА-Я1-9a-zA-ZіІєЄґҐїЇ]+(([' -][ыЫа-яА-Я1-9a-zA-ZіІєЄґҐїЇ])?[ыЫа-яА-Я1-9a-zA-ZіІєЄґҐїЇ]*)*$/,
      'Name must contain only letters'
    )
    .required('Name is required'),
    email: Yup.mixed().test({
      name: 'email',
      params: { a: 'test', b: 'qwe' },
      test: value => {
        return /\w+@\w+\.\w{1,5}/.test(value);
      },
    }),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required('Name is required'),
    address: Yup.string()
    .min(5, 'Address must contain at least 5 letters')
    .required('Address is required'),
});

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    if(cart.length>0){
      setTotal(cart.reduce((total, item)=>total+(item.price*item.quantity),0))
      }
  },[cart])

  const handleSubmit = ({values, order, total}) => {
    console.log(values, order, total);
    // dispatch(updateUserInfo(formData));

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
      // validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        console.log('form', values)
        handleSubmit({values, order:JSON.stringify(cart), total});
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {props => (
        <Form onSubmit={props.handleSubmit}>
          <InputsWrapper>
            <label htmlFor="name" id="labelName">
              <input
                type="text"
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
                {/* {props.errors.name && props.touched.name ? (
              <ErrorMessage>{props.errors.name}</ErrorMessage>
            ) : null} */}
            </label>
            <label htmlFor="email" id="labelEmail">
              <input
                type="email"
                name="email"
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
                {/* {props.errors.email && props.touched.email ? (
              <ErrorMessage>{props.errors.email}</ErrorMessage>
            ) : null} */}
            </label>
            <label htmlFor="phone" id="labelPhone">
              <input
                type="tel"
                name="phone"
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
                {/* {props.errors.phone && props.touched.phone ? (
              <ErrorMessage>{props.errors.phone}</ErrorMessage>
            ) : null} */}
            </label>
            <label htmlFor="address" id="labelAddress">
              <input
                type="text"
                name="address"
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
                {/* {props.errors.address && props.touched.address ? (
              <ErrorMessage>{props.errors.address}</ErrorMessage>
            ) : null} */}
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