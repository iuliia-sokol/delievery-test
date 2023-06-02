import styled from "styled-components";

export const MainWrapper = styled.div`
display:flex;
justify-content:space-between;
gap:30px;
`
export const ShopsPanel = styled.aside`
flex-basis: 30%;
min-width:200px;
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

export const ShopsList =styled.ul`
display:flex;
flex-direction:column;
gap:16px;


li {
    border-radius: ${p => p.theme.radii.tabs};
    padding: 16px;
    background-color: hsla(215, 98%, 79%, 0.4);
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

}
`

export const ShopTab = styled.div`
    display:flex;
    justify-content:space-between;

 h3 {
    color: ${p => p.theme.colors.mainDark};
    font-family: ${p => p.theme.fonts.main};
    font-size:14px;
 }
`

export const ShopLogoImg= styled.img`
width:40px;
`

export const ProductsPanel = styled.div`
flex-grow:1;
max-height:70vh;
overflow-y:scroll;
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

export const ProductsList = styled.ul`
display:flex;
flex-wrap:wrap;
gap:12px;

li{
    width:calc(100% / 3 - 12px); 
    height:fit-content;
    /* max-height:360px; */

}
`

export const ProductCard = styled.div`
display:flex;
flex-direction:column;
align-items:stretch;
justify-content:center;
gap:12px;

`

export const ProductImg =styled.img`
width:100%;
border-radius:16px;
align-self:center;
`

export const ProductData = styled.div`
display:flex;
flex-direction:column;
height:65px;
max-height:65px;
gap:8px;
border-radius: ${p => p.theme.radii.tabs};
padding: 16px;
color: ${p => p.theme.colors.mainDark};
font-family: ${p => p.theme.fonts.main};
box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

h4 {
    font-size:16px;
    display: inline-block;
    max-width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

p{
    font-size:12px;
    max-width: 170px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    word-break: break-word;
    hyphens: auto;
}
`