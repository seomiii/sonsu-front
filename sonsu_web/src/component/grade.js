import React,{useCallback, useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Chart from "./chart/chart2";
import Header from './header'
import {
    GradeDiv,
    GradeTitle,
    GradeLevel,
    GradeChart,
    ChartDivA,
    ChartDivB,
} from './../component_css/Grade_style';
import { 
    MediaDiv,
    Curri, 
} from './../component_css/Study_style';
import { HeaderDiv } from '../component_css/Home_style';

const Level_Arr=[
    {
        level_name:["초급", "중급", "고급"],
    },
]

const Grade = (props) => {

    const level_arr=Level_Arr[(level-1)].level_name;

    const [cur_curri,setCurri] = useState(curri_arr[0]);
    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <MediaDiv>
                <GradeDiv>
                    <GradeTitle>성적표</GradeTitle>
                    <GradeLevel>
                        {curri_arr.map(i=> (                    
                            <Curri onClick={()=> {setCurri(i)}}>{i}</Curri>                
                        )
                        )}
                    </GradeLevel>
                    <GradeChart>
                        <ChartDivA>
                            <Chart/>
                        </ChartDivA>
                        <ChartDivB>
                            <Chart/>
                        </ChartDivB>
                    </GradeChart>
                </GradeDiv>
            </MediaDiv>
        </>
    )
}

export default Grade