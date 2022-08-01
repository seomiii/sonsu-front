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
    // background-color: lightblue;
    min-height:100vh;
    width: 1024px;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }   
`
export const TitleDiv=styled.div`
    background-color:skyblue;
    margin-top: 37px;
    margin-bottom: 37px;
`

export const LevelDiv=styled.div`
    //background-color: lightyellow;
    font-size : 32px;
    display: flex;
      
  
`

export const CurriDiv=styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;  
`
export const Curri=styled.button`
    background-color: white;
    font-size: 24px;  
    border:none;  
    border-left : 1px solid #FF7A00;  
    margin-right: 50px;      
`

export const WordsDiv=styled.div`
    background-color: beige;
    display: flex;
    flex-direction: row;  
`

export const WordDiv=styled.div`
    width: 319px;
    height: 432px;
    background-color: white;
    border-radius: 25px;
    margin:40px 20px 40px 20px;
`
export const WordThumb=styled.img`
    width: 268px;
    height: 164px;
`


