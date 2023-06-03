import { BtnElement } from './Button.styled';

export const Button = ({
  text,
  icon: Icon = null,
  disabled = false,
  type = 'button',
  onClick = null,
  location='home',

}) => {
  return (
    <BtnElement type={type}  location={location} disabled={disabled} onClick={onClick}>
      {Icon && <Icon></Icon>}
      {text}
    </BtnElement>
  );
};