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
    font-size:16px;
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
`