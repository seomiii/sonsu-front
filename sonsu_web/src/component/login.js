import '../component_css/login.css'
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <section className="login">
            <div className="log_contents">
                <div className="log_title">
                    <h3>
                    어서오세요 <br/>
                    여기는 <br/>
                    손수입니다 <br/>
                    </h3>
                </div><br/>
                <button className="google_bt" href="path : /oauth2/authorization/google">
                    구글로 로그인하기 <img className="google_img" alt="hand" src="img/google_logo.png" width="100" height="100"/>
                </button><br/>
                <button className="kakao_bt">
                    카카오로 로그인하기 <img className="kakao_img" alt="hand" src="img/kakao_logo.jpg" width="100" height="100"/>
                </button><br/>
                <button className="log_start">회원가입</button><br/><br/>
                <div className="log_search">
                    비밀번호를 잊어버리셨나요?
                </div>
            </div>
        </section>
    )
}

export default Login