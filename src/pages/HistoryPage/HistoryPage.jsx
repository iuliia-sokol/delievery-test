import { Container } from "components/Container/Container";
import { HistoryWrapper, InputsWrapper,MainWrapper  } from "./HistoryPage.styled";

const HistoryPage = () => {
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
        <HistoryWrapper></HistoryWrapper>
       </MainWrapper>
      </Container>
    );
  };
  
  export default HistoryPage;