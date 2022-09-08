import {Link} from 'react-router-dom';
import Header from './header';
import {HeaderDiv} from './../component_css/Home_style';
import {
    LoginContain,
    LoginDiv,
    LoginTitle,
    LoginBtn,
    GoogleBtn,
    KakaoBtn,
    Logincontent,
    LoginDivAll,
    Btntxt,
} from './../component_css/Login_style';
import {
    HeaderBack,
} from './../component_css/Home_style';

const Login = () => {
    return (
        <> 
            <LoginContain>
                <HeaderBack>
                    <HeaderDiv>
                        <Header/>
                    </HeaderDiv>
                </HeaderBack>
                <LoginDivAll>
                    <LoginDiv>
                        <LoginTitle>
                            어서오세요 <br/>
                            여기는 <br/>
                            손수입니다 <br/>
                        </LoginTitle>
                        <Logincontent>소셜로그인으로 빠르게 시작하기</Logincontent>
                        <LoginBtn>
                            <Link to={"/home"}>
                                <KakaoBtn>
                                    <img className="kakao_img" alt="hand" src="img/kakao_bt.png"/> 
                                </KakaoBtn>
                            </Link>
                            <Link to={"/home"}>
                                <GoogleBtn>
                                    <img className="google_img" alt="hand" src="img/google_bt.png"/>
                                </GoogleBtn>
                            </Link>
                        </LoginBtn>
                    </LoginDiv>
                </LoginDivAll>
            </LoginContain>
        </>
    )
}

export default Login