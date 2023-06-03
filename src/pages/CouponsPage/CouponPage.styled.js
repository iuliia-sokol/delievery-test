import styled from "styled-components";

export const CouponList = styled.ul`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
gap:30px;
color: ${p => p.theme.colors.mainDark};
padding-left:16px;
background-color: rgba(255, 255, 255, 0.1);
box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

li{
    display:flex;
    flex-basis:calc(100% / 3 - 60px);
    flex-direction:column;
    padding:16px;
}
`


export const CouponImg = styled.img`
height: 250px;
border-radius: ${p => p.theme.radii.tabs};
`

export const CtrlsWrapper = styled.div`
display:flex;
justify-content:space-between;
padding:12px;
border-radius: ${p => p.theme.radii.tabs};
background-color: rgba(255, 255, 255, 0.1);
box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`
export const ButtonCopy = styled.button`
width:fit-content;
align-self:center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding:8px 12px;
  font-family: ${p => p.theme.fonts.main};
  color: ${p => p.theme.colors.mainDark};
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
`