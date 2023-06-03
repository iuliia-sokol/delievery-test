import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "components/Container/Container";
import { HistoryWrapper, InputsWrapper,MainWrapper, OrderImg, OrderWrapper, OrdersList  } from "./HistoryPage.styled";
import { getHistory } from "redux/history/historyOperations";
import { getHistoryRecord, getIsHistoryFetching } from "redux/history/historySelectors";
import { Loader } from "components/Loader/Loader";
import defaultShopLogo from '../../images/defaultShopLogo.png'
import { BASE_URL } from 'utils/consts';

const HistoryPage = () => {
  const dispatch = useDispatch();
  const history = useSelector(getHistoryRecord)
  const loading = useSelector(getIsHistoryFetching)

  useEffect(() => {
    dispatch(getHistory());
    
  }, [dispatch]);
    return (
      <Container >
       <MainWrapper>
        <InputsWrapper>
        <h4>Search</h4>
        <label>Name 
          <input type="text"/>
        </label>
        <label>Email 
          <input type="email"/>
        </label>
        </InputsWrapper>
       {loading? <Loader/>:
        <HistoryWrapper>
      {history.length<=0 ? <p>Orders list is empty</p>:
         <OrdersList>
          {history.map(item => {
                  return (
                    <li key={item._id}  >
                      <OrderWrapper>
                      <OrderImg
                      src={item.pictureURL ? `${BASE_URL}/${item.pictureURL}`: defaultShopLogo} alt="shop logo"/>
                      <h3>{item.name}</h3>

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