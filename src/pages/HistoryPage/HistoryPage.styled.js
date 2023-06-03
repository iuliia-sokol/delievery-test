import styled from "styled-components";

export const MainWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:30px;
`

export const InputsWrapper = styled.div`
width:50%;
height:fit-content;
align-self:center;
display:flex;
flex-direction:column;
gap:24px;
justify-content:center;
align-items:center;
padding:32px;
background: rgba(255, 255, 255, 0.1);
color: ${p => p.theme.colors.mainDark};
border-radius: 16px;
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: ${p => p.theme.radii.tabs};
border: 2px solid rgba(110, 140, 500, 0.2);
  box-shadow: 10px 12px 12px 0px #cab1b14d, 0 0 10em 1em rgba(110, 140, 500, 0.2);

  h4{
    font-size:18px;
    align-self:center;
    margin-bottom:16px;
  }

  label {
    display:flex;
    justify-content:space-between;
    font-size:14px;
    color: ${p => p.theme.colors.mainDark}; 
   
  }
  input {
    width:200px;
    margin-left:16px; 
    border-radius: 8px;
    padding:6px 12px;
}
`



export const HistoryWrapper = styled.div`
height:fit-content;
max-height:70vh;
overflow-y:scroll;
width:100%;
display:flex;
flex-direction:column;
padding:32px;
background: rgba(255, 255, 255, 0.1);
color: ${p => p.theme.colors.mainDark};
border-radius: 16px;
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: ${p => p.theme.radii.tabs};
border: 2px solid rgba(110, 140, 500, 0.2);
box-shadow: 10px 12px 12px 0px #cab1b14d, 0 0 10em 1em rgba(110, 140, 500, 0.2);

h4{
    font-size:18px;
    align-self:center;
    margin-bottom:16px;
}

`

export const OrdersList = styled.ul`
display:flex;
flex-direction:column;
gap:12px;

li{
    border-radius: ${p => p.theme.radii.tabs};
    padding: 16px 32px;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
}
`

export const OrderWrapper = styled.div`
display:flex;
flex-direction:column;
gap:30px;
`
export const OrderId = styled.p`
font-size:12px;
color: #cecece;
margin-bottom:12px;
`

export const OrderDataWrapper = styled.div`
display:flex;
gap:24px;
justify-content:space-between;
flex-basis:25%;
`

export const OrderImg = styled.img`
width:50px;
border-radius: ${p => p.theme.radii.tabs};
`

export const OrderedList = styled.ul`
display:flex;
flex-direction:column;
width:100%;

li{
    display:flex;
    justify-content:space-between;

    p{
        font-size:16px;
    }
}
`
export const Total = styled.p`
width:fit-content;
align-self:flex-start;
display:inline-block;
padding:12px;
font-size:20px;
font-weight:bold;
background-color: ${p => p.theme.colors.mainAccent};
color:${p => p.theme.colors.mainDark};
border-radius: ${p => p.theme.radii.tabs};
`