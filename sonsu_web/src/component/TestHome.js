import '../component_css/Test.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";

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
        image_src : 'img/level1.png'
    }
    ,
    {
        image_src : 'img/level2.png'
    }
    ,
    {
        image_src : 'img/level3.png'
    }  
]

function TestHome() {

        return (
            <>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={2}>
                        {Test_level(1)}
                    </Grid>
                    <Grid item xs={2}>
                        {Test_level(2)}
                    </Grid>
                    <Grid item xs={2}>
                        {Test_level(3)}
                    </Grid>
                </Grid>
            </>
        );
}

function Test_level(level) {
    return(
        <>
            <img src={Images[(level-1)].image_src} width={200} height={200} alt="image"/> <br/>
            <h3>{Levels[(level-1)].level_name}</h3>
            <br/> <br/>
            <Link to={"/test_home/test"}
                state={{level : (level)}}>
                <button className="start">시작하기</button>
            </Link>
        </>
    );
}

export default TestHome;
