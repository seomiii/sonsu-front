import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles=createGlobalStyle`
    ${reset}
    body{
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      }
`
export const MediaDiv=styled.div`
    margin: 0px auto;
    //background-color: lightblue;
    min-height:60vh;
    width: 1026px;
    @media screen and (max-width: 1026px) {
        width: 100%;
    } 
`
export const Header_Div=styled.div`
    width : 1024px;
    margin: 0px auto;
`
// --------------------------TestHome.js ----------

export const ImgBox=styled.img`
    width:100%;
    height: 270px;
    object-fit:contain;
    text-align:center;   
    background-color: #F37A1F;
`
export const FullBox=styled.div`
    display:flex;
    justify-content: space-between;
`

export const LevelBox=styled.div`
    width: 322px;
    height: 490px; 
    border-radius : 20px;
    background-color: #F9F9F9;
    margin-top:34px;
`

export const ImgDiv=styled.img`
    width: 258px;
    height: 264px;
    object-fit:cover;
    margin-top:40px;
    margin-bottom:32px;
`

export const LevelName=styled.p`
    //background-color:yellow;
    font-size: 22px;
    font-weight:500;
    line-height:27.54px;
    color:#2E2E2E;
`

export const TestBtn=styled.button`
    border:none;
    background: #FF7A00;
    border-radius: 50px;
    color:white;
    width: 199px;
    height: 47px;
    font-size: 18px;
    font-weight:500;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin-top: 39px;

    transition: 0.4s;
    &:hover{
        color:#FF7A00;
        background-color:white;
        border:1px solid #FF7A00;
    }
`

// --------------------------------Test.js ---------
export const TestDiv=styled.div`
    flex-direction:row;
    //background:red;
`
export const TestNumberDiv=styled.div`
    //background:yellow;   
    text-align: center;
    margin-top:30px; 
    background: rgba( 0, 0, 0, 0.7 );
    font-size:24px;
    border-radius: 21px 21px 0 0;
    color:white;
    width:982px;
`

export const TestNumber=styled.div`
    text-align:center;
    display: inline-block;
    padding: 10px 0;
`
export const TestWord=styled.div`
    display: inline-block;
    padding: 10px 0;
    margin-left: 20px;
    //background: red;
`

export const CamDiv=styled.div`
    width:982px;
    height:553px;
    //margin-top:15px; 
    background-color:black; 
    border-radius: 0 0 21px 21px;
`

export const FollowDiv=styled.div`
    background-color: ${props=>props.isLast ? '#F37A1F' : 'rgba(0,0,0,0.7)'};
    margin-bottom:20px;
    //background-color:rgba(0,0,0,0.7);
    border-radius: 12px;
    height:60px;
    line-height:60px;
`

export const FollowBtn=styled.button`
    border:none;
    outline:none;
    background-color:rgba(0,0,0,0.0);
    color:white;
    font-size: 16px;   
`
export const NextBtn=styled.button`
    display:${props=>props.isLast ? 'none' : ''};
    border:none;
    outline:none;
    background-color:rgba(0,0,0,0.0);
    color:white;
    font-size: 16px;
    line-height:16px;
`
export const ShowResultBtn=styled.button`
    display:${props=>props.isLast ? '' : 'none'};
    background-color:rgba(0,0,0,0.0);
    border:none;
    outline:none;
    color:white;
    font-size: 16px;
`