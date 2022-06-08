import {Link} from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="contents">
                
                <h2 className='title'>서비스소개</h2>
                <Link to={"/mypage"}>
                <button className='start'>시작하기</button>
                </Link>
                {/* <img src='C:/web/sonsu_web/src/component/layout/images/hand.png'></img> */}
                <img className="handImage" alt="hand" src="img/hand.png" />
            </div>
        </section>
    )
}

export default Home