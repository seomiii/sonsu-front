import Chart from "./chart/chart2";
import {Link} from 'react-router-dom';
import Header from './header'
import {
    GradeDiv,
    GradeTitle,
    GradeLevel,
    GradeChart,
    ChartDivA,
    ChartDivB,
} from './../component_css/Grade_style';
import { MediaDiv } from '../component_css/Study_style';
import { HeaderDiv } from '../component_css/Home_style';

const Grade = () => {
    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <MediaDiv>
                <GradeDiv>
                    <GradeTitle>성적표</GradeTitle>
                    <GradeLevel> 초급 | 중급 | 고급 </GradeLevel>
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