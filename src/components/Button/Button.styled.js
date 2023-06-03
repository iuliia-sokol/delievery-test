import styled from 'styled-components';

export const BtnElement = styled.button`
  width:${p => p.location==='home'? '90%': 'unset'};
  align-self:center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding:8px 12px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[2]};
  text-transform: uppercase;
  background-color: ${p => {
    return p.disabled ? p.theme.colors.btnDisabledBg : p.theme.colors.mainAccent;
  }};
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: transparent;
    border: 2px solid pink;

  }
`;
