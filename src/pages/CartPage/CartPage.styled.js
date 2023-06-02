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
    padding: 16px;
    background-color: hsla(215, 98%, 79%, 0.4);
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`

export const CartDataWrapper = styled.ul`
flex-grow:1;
display:flex;
flex-direction:column;
gap:8px;
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
justify-content:space-between;
`