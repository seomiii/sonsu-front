import '../component_css/header.css'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';


const Header = () => {

    return (
        <header className="header">
            <div className="nav">
                {/* <h2>이것은 헤더다.</h2> */}
                <div className="nav_menu">
                    <Link to={"/study"}>
                    <div className='menu_content'>수강하기</div>
                    </Link>
                    <Link to={"/test_home"}>
                    <div className='menu_content'>테스트하기</div>
                    </Link>
                    <Link to={"/service_intro"}>
                    <div className='menu_content'>서비스소개</div>
                    </Link>
                    <Link to={"/mypage"}>
                    <div className='menu_content'>마이페이지</div>
                    </Link>
                    <Link to={"/login"}>
                    <div className='menu_content'><button href='#' className='login_bt'>로그인 </button></div>
                    </Link>
                    {/* <li><input type="text"></input></li>
                    <li><button href='#'>검색 </button></li> */}
                </div>
            </div>
        </header>
    )
}

export default Header