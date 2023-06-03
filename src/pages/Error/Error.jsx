import { Container } from 'components/Container/Container';
import { ErrorWrapper, ImgWrapper, NavLinkStyled, TextError } from './Error.styled';
import error from '../../images/error.png'

const Error = () => {
    return (
      <ErrorWrapper>
        <Container>
          <TextError>
            <strong>We are sorry,</strong>
            <p>but the page you were looking for can’t be found..</p>
            <NavLinkStyled to='/home'>Click to navigate to Homepage</NavLinkStyled>
          </TextError>
          <ImgWrapper>
          <img src={error} alt="sad cat page not found" />
          </ImgWrapper>
        </Container>
      </ErrorWrapper>
    );
  };
  
  export default Error;
  