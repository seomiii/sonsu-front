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
    min-height:89vh;
    // width: 100%;   
    background-image: url( "img/hand-sign-back.jpg");
    // background-size: cotain;
    // background-color: rgba(255, 122, 0, 0.1);    
`

export const HomeDesTitle=styled.div`
    font-size:30px;
    font-weight:bold;
    text-align: left;
    line-height: 40px;
    // margin-top: 100px;

`

export const HomeContent=styled.div`
    margin-top:30px;
    font-size:18px;
    line-height: 30px;
    text-align: left;
    // margin-top: 100px;

`

export const StartBtn=styled.button`
    margin-top: 30px;
    border:none;
    outline:none;
    background-color: #F37A1F;
    color:white;
    border-radius: 83px;
    width: 140px;
    height: 36px;
    font-size:14px;
    float: left;
`