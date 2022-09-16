import styled, { keyframes } from 'styled-components';

const Fade=keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const FadeHome=styled.div`
    animation: ${Fade} 1s;
`

export const HeaderDiv=styled.div`
    margin: 0px auto;
    width: 1024px;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }   
    //background-color:skyblue;
`
export const HeaderBack=styled.div`
    background-color:white;
    position: absolute;
    width:100%;
    height: 100;
`

export const HomeText=styled.div`
    position: relative;
    min-height:89vh;   
`
export const HomeImg=styled.img`
    width: 100%;
    height:89vh; 
    object-fit:cover;
`
export const HomeDesDiv=styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    width: 600px;
    text-align: left;
`
export const HomeDesTitle=styled.div`
    width: 600px;
    font-size:38px;
    font-weight:700;
    text-align: left;
    line-height: 55px;
    // background-color:skyblue;
`

export const HomeContent=styled.div`
    width: 600px;
    margin-top:51px;
    font-size:24px;
    font-weight:400;
    line-height: 40px;
    text-align: left;
    // background-color:skyblue;
  `

export const StartBtn=styled.button`
    margin-top: 58px;
    border:none;
    outline:none;
    background-color: #FF7A00;
    color:white;

    border-radius: 109px;
    width: 212px;
    height: 50px;
    font-size:20px;
    font-weight:500;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    float: left;

    transition: 0.4s;
    &:hover{
        color:#FF7A00;
        background-color:white;
        border:1px solid #FF7A00;
    }
`