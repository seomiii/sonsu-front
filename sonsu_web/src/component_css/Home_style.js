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
`

export const HomeDiv=styled.div`
    min-height:100vh;
    background-color: rgba(243,122,32,0.07);
`
export const HomeDesTitle=styled.div`
    font-size:32px;
    font-weight:bold;

`

export const StartBtn=styled.button`
    border:none;
    outline:none;
    background-color: #F37A1F;
    color:white;
    border-radius: 83px;
    width: 140px;
    height: 36px;
    font-size:14px;
`