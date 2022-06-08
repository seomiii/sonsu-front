import './header.css'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <div>
                {/* <h2>이것은 헤더다.</h2> */}
                <ul className="menu">
                    <li><button href='#'>수강하기</button></li>
                    <li><button href='#'>테스트하기</button></li>
                    <li><button href='#'>서비스소개 </button></li>
                    <Link to={"/mypage"}>
                    <li><button href='#'>마이페이지</button></li>
                    </Link>
                    <li><button href='#'>로그인 </button></li>
                    <input type="text"></input>
                    <li><button href='#'>검색 </button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header