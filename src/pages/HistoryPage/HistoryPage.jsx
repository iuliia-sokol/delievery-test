import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "components/Container/Container";
import { HistoryWrapper, InputsWrapper,MainWrapper, OrderDataWrapper, OrderId, OrderImg, OrderWrapper, OrderedList, OrdersList, Total  } from "./HistoryPage.styled";
import { getHistory } from "redux/history/historyOperations";
import { getHistoryRecord, getIsHistoryFetching } from "redux/history/historySelectors";
import { Loader } from "components/Loader/Loader";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { BASE_URL } from 'utils/consts';
import { filterContact } from "redux/filter/filterSlice";
import { getFilter } from "redux/filter/filterSelectors";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const history = useSelector(getHistoryRecord)
  const loading = useSelector(getIsHistoryFetching)


  useEffect(() => {
    dispatch(getHistory());
    
  }, [dispatch]);



  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = history.filter(el =>
      el.email.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      // alert('No orders matching your request');
      return [];
    }
    return filteredContacts;
  };

    return (
      <Container >
       <MainWrapper>
        <InputsWrapper>
        <h4>Search orders by email</h4>
        <label>Email 
          <input type="text"
           placeholder="Start entering your email"
           value={filter}
           onChange={e => dispatch(filterContact(e.target.value))}/>
        </label>
        </InputsWrapper>
       {loading? <Loader/>:
        <HistoryWrapper>
          <h4>Orders record</h4>
       {history.length<=0 ? <p>Orders list is empty</p>:
         <OrdersList>
          {filterContacts().map(item => {
                  return (
                    <li key={item._id}  >
                      <p>Order from {item.name} on {item.createdAt.slice(0,10)}</p>
                      <OrderId>Order ID: {item._id}</OrderId>
                      <OrderWrapper>
                        <OrderedList>
                       {item.order.map(prod=>{
                       return (
                        <li key={prod._id}>
                          <OrderDataWrapper>
                            <OrderImg
                            src={prod.pictureURL ? `${BASE_URL}/${prod.pictureURL}`: defaultShopLogo} alt="shop logo"/>
                            <p>{prod.name}</p>
                          </OrderDataWrapper>
                      
                      <p>Amount: {prod.quantity}</p>
                      <p>Price: {prod.price}</p>
                        </li>)
                       }
                        )}
                        </OrderedList>
                      <Total>Total: {item.total} UAH</Total>
                      </OrderWrapper>
                    </li>
                  );
                })}
          </OrdersList>}
        </HistoryWrapper>
        }
       </MainWrapper>
      </Container>
    );
  };
  
  export default HistoryPage;