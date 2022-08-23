import Chart from "./chart/chart2";
import {Link} from 'react-router-dom';
import Header from './header'
import {
    GradeTitle,
    GradeLevel,
    ChartDivA,
    ChartDivB,
} from './../component_css/Grade_style';
import { HeaderDiv } from '../component_css/Home_style';

const Grade = () => {
    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <GradeTitle>성적표</GradeTitle>
            <GradeLevel> 초급 | 중급 | 고급 </GradeLevel>
            <ChartDivA>
                <Chart/>
            </ChartDivA>
            <ChartDivB>
                <Chart/>
            </ChartDivB>
        </>
    )
}

export default Grade