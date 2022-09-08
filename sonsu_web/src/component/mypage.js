import Chart from "./chart/chart";
import {useLocation,Link} from 'react-router-dom';
import Header from './header'
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv,
        LevelBox,
        StudyBtn,
} from '../component_css/Study_style';
// import Chart from 'react-apexcharts';
import {
    Myheader,
    MypageDiv,
    Profilecontain,
    PCA,
    PCB,
    Profile,
    ProfileText,
    Profileimg,
    Profilename,
    Profileemail,
    Profiledate,
    Going,
    MyBtn,
    Process,
    ChartBox,
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

const Levels=[
    {
        level : 1,
        level_name : '초급',
        level_info : '수어의 지문자를 배워 자음과 모음을 표현해봅시다. 손수와 함께 수어의 첫단추를 끼워보아요.',
    }
    ,
    {
        level : 2,
        level_name : '중급',
        level_info : '일상생활에서 자주 쓰이는 표현들을 배워봅시다. 간단한 의사소통을 주고받아 보아요.'
    }
    ,
    {
        level : 3,
        level_name : '고급',
        level_info : '문장 구성의 핵심이 되는 다양한 단어들을 배워봅시다. 배운 단어들을 이용하여 원하는 문장을 만들어보아요.'
    }    
]

const Mypage = (props) => {
    return (
        <>
            <Myheader>
                <HeaderDiv>
                    <Header/>
                </HeaderDiv>
            </Myheader>
            <MediaDiv>
                <FadeHome>
                    <MypageDiv>
                        <Profilecontain>
                            <PCA>
                                <Profile>
                                    <img src='img/bar.png' alt="image"/>
                                    <ProfileText>
                                        프로필
                                    </ProfileText>
                                </Profile>
                                <PCAprofile>
                                    <Profileimg></Profileimg>
                                    <PCAcontent>
                                        <Profilename> {user.nickname} </Profilename>
                                        <Profileemail> {user.email} </Profileemail>
                                        <Profiledate> 손수와 함께한지 {user.date}일째 </Profiledate>
                                    </PCAcontent>
                                </PCAprofile>
                            </PCA>
                            <PCB>
                                <Going>
                                    <img src="img/bar.png" alt="image"/>
                                    <ProfileText>
                                        바로가기
                                    </ProfileText>
                                </Going>
                                <Link to={"/grade"} style={{ textDecoration: 'none' }}>
                                    <MyBtn><Circle></Circle> 성적표 </MyBtn>
                                </Link>
                                <Link to={"/wrong"} style={{ textDecoration: 'none' }}>
                                    <MyBtn><Circle></Circle> 오답노트 </MyBtn>
                                </Link>
                            </PCB>
                        </Profilecontain>
                        <Chartcontain>
                            <Process>
                                <img src='img/bar.png' alt="image"/>
                                <ProfileText>
                                    수강 진행 상황
                                </ProfileText>
                            </Process>
                            <ChartBox>
                                <Chart/>
                                <ChartName>
                                    <PieName> 70% </PieName>
                                    <PieName> 20% </PieName>
                                    <PieName> 30% </PieName>
                                </ChartName>
                                <GoDiv>
                                    {/* {Study_level(1)}
                                    {Study_level(2)}
                                    {Study_level(3)}  */}
                                    <GoBtn> 초급 바로가기 </GoBtn>
                                    <GoBtn> 중급 바로가기 </GoBtn>
                                    <GoBtn> 고급 바로가기 </GoBtn>
                                </GoDiv>
                            </ChartBox>
                        </Chartcontain>
                    </MypageDiv>
                </FadeHome>
            </MediaDiv>
            {/* <Chart options={options} series={series} type="radialBar" height="50" /> */}
        </>       
    )

}

function Study_level(level){

    return(
        <LevelBox>
            <div>
                <Link to = {"study_class"} state={{level : (level)}}>
                    <StudyBtn>수강하기</StudyBtn>
                </Link>
            </div> 
        </LevelBox>
    );
}

export default Mypage