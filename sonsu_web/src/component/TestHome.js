
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import Header from './header';
import { FadeHome } from '../component_css/Home_style';
import {Header_Div,ImgBox,MediaDiv,ImgDiv,LevelName
,TestBtn,LevelBox,FullBox} from './../component_css/Test_style';

const Levels=[
    {
        level : 1,
        level_name : '초급'
    }
    ,
    {
        level : 2,
        level_name : '중급'
    }
    ,
    {
        level : 3,
        level_name : '고급'
    }    
]

// 이미지 받아오는거는 나중에 생각해보자
// const getLevelImage=()=>{
//     axios.get("")
//     .then(
//         (response) => {
            
//         }
//     )
// }

// 나중에 이미지 받아오는게 해결되면 지울 부분
const Images=[
    {
        image_src : '/img/level1-1.png'
    }
    ,
    {
        image_src : '/img/level2-2.png'
    }
    ,
    {
        image_src : '/img/level3-3.png'
    }  
]

function TestHome() {

        return (
            <>
                <Header_Div>
                    <Header/> 
                </Header_Div>

                <ImgBox src='/img/test_box.jpg'/>

                <MediaDiv>  
                <FadeHome> 
                    <FullBox>                 
                        {Test_level(1)}                      
                        {Test_level(2)}
                        {Test_level(3)}  
                    </FullBox> 

                </FadeHome>                    
                </MediaDiv>
            </>
        );
}

function Test_level(level) {
    return(
        <LevelBox>
            <ImgDiv src={Images[(level-1)].image_src} alt="image"/>
            
            <LevelName>{Levels[(level-1)].level_name}</LevelName>

            <Link to={"/test_home/test"}
                state={{level : (level)}}>
                <TestBtn>시작하기</TestBtn>
            </Link>
        </LevelBox>
    );
}

export default TestHome;
