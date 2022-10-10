import React,{useCallback, useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Chart1 from "./chart/grade_chart_1";
import Chart2 from "./chart/grade_chart_2";
import Chart3 from "./chart/grade_chart_3";
import axios from 'axios';
import Header from './header'
import {
    GradeDiv,
    GradeTitle,
    GradeLevel,
    GradeChart,
    ChartDivA,
    ChartDivB,
    ChartDivC,
} from './../component_css/Grade_style';
import { 
    MediaDiv,
    Curri, 
} from './../component_css/Study_style';
import { HeaderDiv } from '../component_css/Home_style';

// 탭 구성 리소스
const Level_Arr=[
    {
        level_name:["초급", "중급", "고급"],
    },
]

const Grade = (props) => {

    const level_name = Level_Arr.curri_arr;

    // const [cur_curri,setCurri] = useState(level_name[0]);

    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <MediaDiv>
                <GradeDiv>
                    <GradeTitle>성적표</GradeTitle>
                    <GradeLevel>
                        {/* {level_name.map(i => (                    
                            <Curri onClick={()=> {setCurri(i)}}>{i}</Curri>                
                        )
                        )} */}
                    </GradeLevel>
                    <GradeChart>
                        <ChartDivA>
                            <Chart1/>
                        </ChartDivA>
                        <ChartDivB>
                            <Chart2/>
                        </ChartDivB>
                        <ChartDivC>
                            <Chart3/>
                        </ChartDivC>
                    </GradeChart>
                </GradeDiv>
            </MediaDiv>
        </>
    )
}

export default Grade