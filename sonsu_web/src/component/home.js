import {Link} from 'react-router-dom';
import Header from './header'
import {
    HeaderDiv,
    StartBtn,
    HomeDesTitle,
    FadeHome,
    HomeContent,
    HomeText,
    HomeDesDiv,

} from './../component_css/Home_style';
import { MediaDiv, } from '../component_css/Study_style';


const Home = () => {
    return (
        <>          
                    <HeaderDiv>
                        <Header/>
                    </HeaderDiv>

                <FadeHome>
                    <HomeText>
                        <HomeDesDiv>
                            <HomeDesTitle>
                                손으로 세상과 소통하는 수어교실,<br/>
                                여기는 손수입니다.
                            </HomeDesTitle>
                            <HomeContent>
                                우리는 수어교육의 격차를 해소하고자<br/>
                                인공지능 기반 수어 학습 프로그램을 제공합니다.<br/>
                                손수를 통해 세상과 소통을 시작해보세요
                            </HomeContent>
                            <Link to={"/service_intro"}>
                                <StartBtn>시작하기</StartBtn>
                            </Link>  
                             
                        </HomeDesDiv>    
                    </HomeText>   
                </FadeHome>
            


        </>
    )
}

export default Home