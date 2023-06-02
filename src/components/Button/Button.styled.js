import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnStandart};
  
  padding:8px 12px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[2]};
  text-transform: uppercase;
  background-color: ${p => {
    return p.disabled ? p.theme.colors.btnDisabledBg : p.theme.colors.mainAccent;
  }};
  color: ${p => p.theme.colors.mainLight};
  transform: scale(1);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainDark};
    background-color: ${p => p.theme.colors.mainAccent};
  }
  /* & > svg {
    margin-right: 8px;
  } */
`;
