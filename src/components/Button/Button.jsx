import { BtnElement } from './Button.styled';

export const Button = ({
  text,
  icon: Icon = null,
  disabled = false,
  type = 'button',
  onClick = null,
}) => {
  return (
    <BtnElement type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon></Icon>}
      {text}
    </BtnElement>
  );
};