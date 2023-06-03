import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { GoogleMap, InfoWindowF, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useGeolocated } from 'react-geolocated';

import { Container } from "components/Container/Container";
import { MainWrapper } from "pages/HomePage/HomePage.styled";
import { CaptchaWrapper, CartDataWrapper, CartImg, CouponBtn, CouponWrapper, Form, FormWrapper, InputsWrapper, MapsInfo, ProductInfoWrapper, ProductPriceWrapper, ProductQuantityWrapper, ProductWrapper, TotalWrapper } from "./CartPage.styled";
import { getCart } from "redux/cart/cartSelectors";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { BASE_URL, CAPTCHA_KEY, MAPS_KEY } from 'utils/consts';
import { Button } from "components/Button/Button";
import { cleanCart, decrementQuantity, incrementQuantity, removeItem } from "redux/cart/cartSlice";
import { setHistory } from "redux/history/historyOperations";
import { Loader } from "components/Loader/Loader";
import { getShopsList } from "redux/shops/shopsSelectors";
import { coupons } from "utils/coupons";


const CartPage = (shopLang, shopLat) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart)
  const [total, setTotal] = useState(0)
  const [checked, setChecked] = useState(false)
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null)
  const [locationMarker, setLocationMarker]=useState({})
  const [coupon, setCoupon] = useState('')
  const [message, setMessage] = useState('')
  
  const shops = useSelector(getShopsList)
  const shop = shops.find(shop=> shop._id===cart[0].shopId)
  const shopCoords = {"lat": +shop.lat, "lng": +shop.long}

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:`${MAPS_KEY}`,
  });


  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: undefined,
    suppressLocationOnMount: false,
  });


  useEffect(() => {
    if (coords) {
     setLatitude(coords.latitude);
     setLongitude(coords.longitude);
     setLocationMarker({ lat: +coords.latitude, lng: +coords.longitude })
    }
    if (!isGeolocationAvailable || !isGeolocationEnabled ) {
     setLatitude('')
     setLongitude('')
    }
    return;
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

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

  const onCaptchaClick = ()=> {
    setChecked(!checked)
  }

  const onMarkerClick=(elem)=>{
    setActiveMarker(elem)
    setInfoWindowOpen(true);
  }

  const onMarkerDragEnd = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setLocationMarker({lat,lng})
  };

const onCouponSubmit =()=>{
const submittedCoupon = coupons.find(el=>el.code === coupon)
if(!submittedCoupon) {
  setMessage("Coupon is unvalid")
  setCoupon('')
}
else {
  setMessage(`You used ${submittedCoupon.name} coupon`)
  setCoupon('')
}
}


const onCouponInputChange = (e)=>{
  setCoupon(e.target.value)
}

console.log(coupon);

    return (
      <Container >
          {!isLoaded ? (
        <Loader/>
      ) :
      <MainWrapper>
        <FormWrapper>
        <div style={{  "width":"100%","height": "250px"}}>
        {latitude && longitude && 
        <GoogleMap
          mapContainerClassName="map-container"
          center={locationMarker}
          zoom={10}
        >
         <MarkerF
         clickable
         name={shop.name}
          onClick={() => {
            onMarkerClick('shop');
          }}
          icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
          position={shopCoords}
        >
          {infoWindowOpen && activeMarker==='shop' && (
            <InfoWindowF  onCloseClick={() => {
              setInfoWindowOpen(false)
              setActiveMarker(null)
              }}>
              <MapsInfo>{shop.name}</MapsInfo>
            </InfoWindowF>
          )}

        </MarkerF>
       {locationMarker &&
        <MarkerF
          clickable
          draggable={true}
          onDragend={(t, map, coord) => onMarkerDragEnd(coord)}
          name='Your location'
          onClick={() => {
            onMarkerClick('loc');
          }}
          position={locationMarker}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        >
          {infoWindowOpen && activeMarker==='loc' && (
            <InfoWindowF   onCloseClick={() => {
              setInfoWindowOpen(false)
              setActiveMarker(null)
              }}>
              <MapsInfo>Your location</MapsInfo>
            </InfoWindowF>
          )}
        </MarkerF>}
    
        </GoogleMap>}
        </div>
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
            <CaptchaWrapper>
            <ReCAPTCHA
              sitekey={CAPTCHA_KEY}
              onChange={onCaptchaClick}
            />
          </CaptchaWrapper>
            <button
              type="submit"
              disabled={
                !checked || !props.values.name || !props.values.email || !props.values.phone || !props.values.address
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
                  <CouponWrapper>
                  <input type='text' value={coupon} placeholder="Add coupon code" onChange={(e)=>onCouponInputChange(e)}/> 
                  <CouponBtn unactive={(!coupon).toString()}
                  onClick={onCouponSubmit}
                  >
                    Use coupon</CouponBtn>
                  </CouponWrapper>
                  {message? <p>{message}</p>: <p></p>}

                  
        </CartDataWrapper>
      </MainWrapper>
      }
      </Container>
    );
  };
  
  export default CartPage;