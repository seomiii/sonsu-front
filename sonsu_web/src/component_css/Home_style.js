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

export const HomeDiv=styled.div`
    margin-top: 25px;
    // min-height:100vh;
    width: 2010px;
    height: 900px;
    background-image: url( "img/hand2.png" );
    background-size: 2010px;
    background-color: rgba(255, 122, 0, 0.1);
    // background-image: url('../img/hand_sign.png'});
    // background-color: rgba(243,122,32,0.07);
`

export const HomeText=styled.div`
    position: absolute;
    top: 400px;
    left: 1150px;

`

export const HomeDesTitle=styled.div`
    font-size:32px;
    font-weight:bold;
    text-align: left;
    // margin-top: 100px;

`

export const HomeContent=styled.div`
    margin-top:20px;
    font-size:20px;
    line-height: 30px;
    text-align: left;
    // margin-top: 100px;

`

export const StartBtn=styled.button`
    margin-top: 20px;
    border:none;
    outline:none;
    background-color: #FF7A00;
    color:white;
    border-radius: 83px;
    width: 140px;
    height: 36px;
    font-size:14px;
    float: left;
`