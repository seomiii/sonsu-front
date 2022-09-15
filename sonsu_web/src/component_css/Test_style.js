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
    margin-bottom: 39px;

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
    width:1224px;
    height:754px;
    //margin-top:15px; 
    background-color:black; 
    border-radius: 22px;
`
export const CurWordHead=styled.div`
    display:flex;
    justify-content:center;
    border-bottom: 3px solid #FF7A00;
    width:400px;
    padding-bottom:23px;
    margin-bottom:47px;
    
`
export const HeadWord=styled.div`    
    font-weight: 700;
    font-size: 32px;
    color: #2E2E2E;
    letter-spacing: 12px;
`
export const HeadWord2=styled.div`
    font-weight: 400;
    font-size: 24px;
    color: #2E2E2E;
    line-height:32px;
`

export const CurWordHeadDiv=styled.div`
    background-color:#FF7A00;
    width:400px;
    height:51px;
    border-radius: 12px 12px 0 0;
    color:white;
    font-size: 20px;
    font-weight: 500;
    line-height:51px;

`
export const CurWord=styled.div`
    border:1px solid #FF7A00;
    border-top:none;
    width:400px;
    height:194px;
    color: #2E2E2E;
    font-size: 32px;
    font-weight: 500;
    border-radius: 0 0 12px 12px;
    line-height:194px;
`

export const PlayTestWords=styled.div`
    color:#2E2E2E;
    background-color: white;  
    overflow: auto;
    &::-webkit-scrollbar{
        width:4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #D9D9D9;
    }    
`
export const PlayTestWord=styled.div`
    font-size: 17px;
    font-weight:400;
    height: 62px;
    line-height:62px;
    text-align:left;
    text-indent: 35px;
    border-bottom: 1px solid #D9D9D9;    
`
export const NextDiv=styled.div`
    background-color: ${props=>props.isLast ? '#F37A1F' : '#4A4A4A'};
    margin-bottom:20px;
    //background-color:rgba(0,0,0,0.7);
    border-radius: 12px;
    height:60px;
    line-height:60px;
    text-align:left;
    margin-top:23px;
`

export const FollowDiv=styled.div`
    background-color: ${props=>props.isLast ? '#F37A1F' : '#4A4A4A'};
    margin-bottom:20px;
    //background-color:rgba(0,0,0,0.7);
    border-radius: 12px;
    height:60px;
    line-height:60px;
    text-align:left;
    // margin-top:23px;
`

export const FollowBtn=styled.button`
    background-color:#FF7A00;
    width:400px;
    height: 103px;
    border:none;
    outline:none;
    border-radius: 12px;
    color: white;
    font-size: 20px; 
    font-weight: 500; 
    font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
    margin-top:70px;
`
export const NextBtn=styled.button`
    display:${props=>props.isLast ? 'none' : ''};
    background-color: ${props=>props.isLast ? '#FF7A00' : '#4A4A4A'};
    border:none;
    outline:none;
    width:400px;
    border-radius: 12px;
    height:60px;
    margin-top:170px;
    color:white;
    font-size: 18px;
    font-weight:400;
    line-height:18px;
    text-align:center;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`
export const ShowResultBtn=styled.button`
    display:${props=>props.isLast ? '' : 'none'};
    background-color: ${props=>props.isLast ? '#FF7A00' : '#4A4A4A'};
    border:none;
    outline:none;
    color:white;
    width:400px;
    border-radius: 12px;
    height:60px;
    margin-top:170px;
    font-size: 20px;
    font-weight:500;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`
// ------------------TestResult.js ------------------------

export const TestResultDiv=styled.div`
    width:1224px;
    height:754px; 
    background-color:#F5F5F5; 
    border-radius: 22px;
`

export const ResultTitle=styled.div`
    margin: 0 auto;
    width: 140px;
    font-size: 24px;
    font-weight: 400;
    color: #2E2E2E;

    padding:22px;
    padding-top:111px;
    border-bottom: 2px solid #FF7A00;
    // background:skyblue;
`

export const Score=styled.div`
    color: #2E2E2E;
    font-weight: 700;
    font-size: 32px;
    letter-spacing:20px;
    margin-top:66px;
`
export const Table=styled.table`
    margin: 0 auto;
    margin-top:66px;
    width:780px;
    background:white;
`
export const Table1=styled.tr`
    background:#4A4A4A;
    color:white;
    height:50px;
    font-weight: 500;
    font-size: 20px;
    line-height:50px;
    border: 1px solid #D9D9D9;
`
export const Th=styled.th`
    border-right: 1px solid #D9D9D9;
`

export const Table2=styled.tr`
    background: #F5F5F5;
    height:68px;
    color: #2E2E2E;
    font-weight: 500;
    font-size: 20px;
    line-height:68px;
`

export const Table3=styled.tr`
    
    background: #FFFFFF;
    height:95px;
    font-weight: 500;
    font-size: 24px;
    line-height:95px;
`
export const Table3th=styled.th`
    border-right: 1px solid #D9D9D9;
    color:#FF7A00;
`

