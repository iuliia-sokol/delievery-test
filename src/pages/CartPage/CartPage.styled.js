import styled from "styled-components";

export const FormWrapper = styled.div`
flex-basis: 40%;
min-width:250px;
height:fit-content;
padding: 16px;
background: rgba(255, 255, 255, 0.1);
border-radius: 16px;
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: ${p => p.theme.radii.tabs};
border: 2px solid rgba(110, 140, 500, 0.2);
  box-shadow: 10px 12px 12px 0px #cab1b14d, 0 0 10em 1em rgba(110, 140, 500, 0.2);
`

export const Form = styled.form`
display:flex;
flex-direction:column;
gap:16px;
border-radius: ${p => p.theme.radii.tabs};
    padding: 16px 32px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`

export const InputsWrapper = styled.div`
display:flex;
flex-direction:column;
gap:16px;

label {
    display:flex;
    justify-content:space-between;
    font-size:14px;
    color: ${p => p.theme.colors.mainDark};  
}

input {
    width:200px;
    border-radius: 8px;
    padding:6px 12px;
}

button {
    align-self:center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  background-color:${p => p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  padding:8px 12px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[2]};
  text-transform: uppercase;
  color: ${p => p.theme.colors.mainDark};
  transition: ${p => p.theme.transitions.main};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: transparent;
    border: 2px solid pink;
  }
}
`

export const CartDataWrapper = styled.div`
flex-grow:1;
display:flex;
flex-direction:column;
gap:8px;
height:fit-content;
max-height:70vh;
overflow-y:scroll;
padding: 16px;
background: rgba(255, 255, 255, 0.1);
color: ${p => p.theme.colors.mainDark};
border-radius: 16px;
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: ${p => p.theme.radii.tabs};
border: 2px solid rgba(110, 140, 500, 0.2);
  box-shadow: 10px 12px 12px 0px #cab1b14d, 0 0 10em 1em rgba(110, 140, 500, 0.2);
`

export const CartImg = styled.img`
width:60px;
border-radius: ${p => p.theme.radii.tabs};
`

export const ProductWrapper=styled.div`
display:flex;
justify-content:space-between;
padding: 8px 16px;
border-radius: ${p => p.theme.radii.tabs};
background-color: rgba(255, 255, 255, 0.1);
box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`

export const ProductInfoWrapper = styled.div`
flex-basis:50%;
display:flex;
align-items:center;
gap:12px;
`

export const ProductQuantityWrapper = styled.div`
display:flex;
align-items:center;
gap:12px;

p {
    font-size:16px;
    color: ${p => p.theme.colors.mainDark};
}
`


export const ProductPriceWrapper = styled.div`
display:flex;
align-items:center;
gap:12px;

p {
    font-size:16px;
    color: ${p => p.theme.colors.mainDark};
}
`

export const TotalWrapper = styled.div`
width:100%;
margin:16px 0px;
display:flex;
align-items:center;
align-self:flex-end;
justify-content:space-between;
`
export const CaptchaWrapper = styled.div`
align-self:center;
display:flex;
justify-content:center;
`