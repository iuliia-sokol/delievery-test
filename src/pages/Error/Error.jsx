import { Container } from 'components/Container/Container';
import { ErrorCont, TextError } from './Error.styled';

const Error = () => {
    return (
      <ErrorCont>
        <Container>
          <TextError>
            <h3>We are sorry,</h3>
            <p>but the page you were looking for can’t be found..</p>
          </TextError>
        </Container>
      </ErrorCont>
    );
  };
  
  export default Error;
  