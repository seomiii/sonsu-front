import {Link} from 'react-router-dom';
import Header from './header';
import {HeaderDiv} from './../component_css/Home_style';
import {
    LoginDiv,
    LoginTitle,
    LoginBtn,
    GoogleBtn,
    KakaoBtn,
    SearchPW,
    Logincontent,
    LoginDivAll,
    Btntxt,
} from './../component_css/Login_style';

const Login = () => {
    return (
        <> 
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <LoginDivAll>
                <LoginDiv>
                    <LoginTitle>
                        어서오세요 <br/>
                        여기는 <br/>
                        손수입니다 <br/>
                    </LoginTitle>
                    <Logincontent>소셜로그인으로 빠르게 시작하기</Logincontent>
                    <LoginBtn>
                        <KakaoBtn>
                            <img className="kakao_img" alt="hand" src="img/Kakao.png" width="50" height="50"/> 
                            <Btntxt>카카오로 로그인하기</Btntxt>
                        </KakaoBtn>
                        <GoogleBtn> {/*href="path : /oauth2/authorization/google" */}
                            <img className="google_img" alt="hand" src="img/Google.png" width="50" height="50"/>
                            <Btntxt>구글로 로그인하기</Btntxt>
                        </GoogleBtn>
                    </LoginBtn>
                    <SearchPW>
                        비밀번호를 잊어버리셨나요?
                    </SearchPW>
                </LoginDiv>
            </LoginDivAll>
        </>
    )
}

export default Login