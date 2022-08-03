import {Link} from 'react-router-dom';
import Header from './header'
import {
HomeDiv,
HeaderDiv,
StartBtn,
HomeDesTitle,

} from './../component_css/Home_style';

const Home = () => {
    return (
        <>
            <HeaderDiv>        
                <Header/>
            </HeaderDiv>

            <HomeDiv>
                <HomeDesTitle>손으로 세상과 소통하는 수어교실, 여기는 손수입니다.</HomeDesTitle>

                
                <Link to={"/service_intro"}>
                    <StartBtn>시작하기</StartBtn>
                </Link>           
            </HomeDiv>        
        </>
    )
}

export default Home