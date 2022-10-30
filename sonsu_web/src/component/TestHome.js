
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import Header from './header';
import { FadeHome } from '../component_css/Home_style';
import {Header_Div,ImgBox,MediaDiv,ImgDiv,LevelName
,TestBtn,LevelBox,FullBox} from './../component_css/Test_style';

const Levels=[
    {
        level : 1,
        level_name : '초급',
        imgUrl : 'img/level1-1.png'
    }
    ,
    {
        level : 2,
        level_name : '중급',
        imgUrl : 'img/level2-2.png'
    }
    ,
    {
        level : 3,
        level_name : '고급',
        imgUrl : 'img/level3-3.png'
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



function TestHome() {
    const [data,setData]=useState();

    useEffect(()=>{
        axios.get('/test')
        .then((response)=>{
        setData(response.data.data);
        })
    },[])

        return (
            <>
                <Header_Div>
                    <Header/> 
                </Header_Div>

                <ImgBox src='/img/test_box.jpg'/>

                <MediaDiv>  
                    <FadeHome> 
                        <FullBox>    
                            {Test_level(1,Levels[0].imgUrl)}                      
                            {Test_level(2,Levels[1].imgUrl)}
                            {Test_level(3,Levels[2].imgUrl)}               
                            {/* {Test_level(1,data&& data[0].imgUrl)}                      
                            {Test_level(2,data && data[1].imgUrl)}
                            {Test_level(3,data && data[2].imgUrl)}   */}
                        </FullBox> 
                    </FadeHome>                    
                </MediaDiv>
            </>
        );
}

function Test_level(level,src) {
    return(
        <LevelBox>
            <ImgDiv src={src} alt="image"/>
            
            <LevelName>{Levels[(level-1)].level_name}</LevelName>

            <Link to={"/test_home/test"}
                state={{level : (level)}}>
                <TestBtn>시작하기</TestBtn>
            </Link>
        </LevelBox>
    );
}

export default TestHome;
