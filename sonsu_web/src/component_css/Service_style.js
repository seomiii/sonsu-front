import styled from 'styled-components';

export const MediaDiv=styled.div`
    margin: 0px auto;
    // background-color: lightblue;
    // min-height:100vh;
    width: 1026px;
    @media screen and (max-width: 1026px) {
        width: 100%;
    }   
`

export const ServiceDiv=styled.div`
    margin-top: 25px;
    background-color: rgba(255, 122, 0, 0.1);
`

export const ServiceContent=styled.div`
    width: 100%;
`

export const ServiceEditor=styled.div`
    margin-top: 80px;
`

export const EditorTitle=styled.div`
    color: #FF7A00;
    text-align: left;
    margin-top: 20px;
    margin-left: 50px;
    font-size: 28px;
    font-weight: bold;
`

export const EditorDiv=styled.div`
    display: flex;
    flex-direction: row;
`

export const MSDiv=styled.div`
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 80px;
    background-image: url("img/miseo.png");
    background-size: 150px;
    &:hover{
        background-image: url("img/miseo-text.png");
        // background-size: 150px;
    }
`

export const JYDiv=styled.div`
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 80px;
    background-image: url("img/jungyune.png");
    background-size: 150px;
    &:hover{
        background-image: url("img/jungyune-text.png");
        // background-size: 150px;
    }
`

export const JHDiv=styled.div`
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 80px;
    background-image: url("img/jihyeon.png");
    background-size: 150px;
    &:hover{
        background-image: url("img/jihyeon-text.png");
        // background-size: 150px;
    }
`

export const MNDiv=styled.div`
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 80px;
    background-image: url("img/muni.png");
    background-size: 150px;
    &:hover{
        background-image: url("img/muni-text.png");
        // background-size: 150px;
    }
`

export const JEDiv=styled.div`
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
    margin-bottom: 80px;
    background-image: url("img/jieun.png");
    background-size: 150px;
    &:hover{
        background-image: url("img/jieun-text.png");
        // background-size: 150px;
    }
`