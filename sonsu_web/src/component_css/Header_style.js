import styled from 'styled-components';

export const HeaderDiv=styled.div`
    width: 100%;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`

export const NavDiv = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: space-between;       
`

export const Logo=styled.div`
    margin:35px 0px;  
`
export const Logoimg=styled.img`
    height:46px;
    width:228px;
    object-fit:cover;
`

export const ContentDiv=styled.div`
    display: flex;
    float:right;
    margin: auto 0;
    text-decoration: none;    
`
export const NavContent=styled.div` 
    width:92px;
    margin-left: 44px;
    margin-top:10px;
    color: #2E2E2E;
    font-size:20px; 
    font-weight:500;
    line-height:25.04px;
    text-decoration: none;
    transition: 0.3s;
    &:hover{
        color: #FF7A00;
    }
`

export const NavLoginBtn=styled.button`
    margin-left: 47px;
    class: my-5;
    color: white;
    background-color: #FF7A00;
    border: none;
    border-radius: 90px;
    width: 156px;
    height: 39px;
    font-size:16px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    transition: 0.4s;
    &:hover{
        color:#FF7A00;
        background-color:white;
        border:1px solid #FF7A00;
    }
`