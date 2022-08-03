import styled from 'styled-components';

export const HeaderDiv=styled.div`
    margin-top: 30px;
    width: 100%;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    //background-color: lightblue;
`

export const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    height:70px;    
    justify-content: space-between;    
    
`

export const Logo=styled.div`
    height:50px;
    //width:50px;
    margin-top:10px;   
`

export const ContentDiv=styled.div`
    display: flex;
    float:right;
    margin: auto 0;
    text-decoration: none;    
`
export const NavContent=styled.div`
    width:100px;    
    margin-left: 43px;
    margin-top:10px;
    color: black;
    font-size:20px; 
    text-decoration: none;
`

export const NavLoginBtn=styled.button`
    margin-left: 53px;
    class: my-5;
    color: white;
    background-color: #FF7A00;
    border: none;
    border-radius: 83px;
    width: 140px;
    height: 36px;
    font-size:14px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`