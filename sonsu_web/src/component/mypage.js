import Chart from "./chart/chart";
import {useLocation,Link} from 'react-router-dom';
import Header from './header'
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv,} from '../component_css/Study_style';
// import Chart from 'react-apexcharts';
import {
    MypageDiv,
    Profilecontain,
    PCA,
    PCB,
    Profile,
    Profileimg,
    Profilename,
    Profileemail,
    MyBtn,
    Process,
    Circle,
    Chartcontain,
    PCAcontent,
    PCAprofile,
    ChartName,
    PieName,
    GoDiv,
    GoBtn
    } from './../component_css/Mypage_style';

import { HeaderDiv } from '../component_css/Home_style';
import userEvent from '@testing-library/user-event';

// 예상되는 서버에서 오는 유저정보
const user={   
    // user.profileimg : 'urlurl',
    // user.nickname : 홍길동,
    // user.email : abcd@gmail.com
    profileimg : 'urlurl',
    nickname : '홍길동',
    email : 'abcd@gmail.com',
    date : 10,
}

// 수강하기의 모든 문항에 대해서 해당 데이터 필요
const word={
    // word.level : 1,
    // word.counts : 6,
    // word.number : 1002
    // word.follow : True,
    level : 1,
    counts : 6,
    number : 1002,
    follow : 'True',
}

const Mypage = (props) => {
    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <MediaDiv>
                <FadeHome>
                    <MypageDiv>
                        <Profilecontain>
                            <PCA>
                                <Profile>프로필</Profile>
                                <PCAprofile>
                                    <Profileimg></Profileimg>
                                    <PCAcontent>
                                        <Profilename>{user.nickname}</Profilename>
                                        <Profileemail>{user.email}</Profileemail>
                                        <Profileemail>수강한지 {user.date}일째</Profileemail>
                                    </PCAcontent>
                                </PCAprofile>
                            </PCA>
                            <PCB>
                                <Link to={"/grade"}>
                                    <MyBtn><Circle></Circle> 성적표 </MyBtn>
                                </Link>
                                <Link to={"/wrong"}>
                                    <MyBtn><Circle></Circle> 오답노트 </MyBtn>
                                </Link>
                            </PCB>
                        </Profilecontain>
                        <Chartcontain>
                            <Process>수강 진행 상황</Process>
                            <Chart/>
                            <ChartName>
                                <PieName> 70% </PieName>
                                <PieName> 20% </PieName>
                                <PieName> 30% </PieName>
                            </ChartName>
                            <GoDiv>
                                <GoBtn> 초급 바로가기 </GoBtn>
                                <GoBtn> 중급 바로가기 </GoBtn>
                                <GoBtn> 고급 바로가기 </GoBtn>
                            </GoDiv>
                        </Chartcontain>
                    </MypageDiv>
                </FadeHome>
            </MediaDiv>
            {/* <Chart options={options} series={series} type="radialBar" height="50" /> */}
        </>       
    )

}

export default Mypage