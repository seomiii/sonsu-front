import '../component_css/home.css'
import {Link} from 'react-router-dom';

const Home = () => {
    // const containerStyle = {
    //     backgroundImage: "url(img/hand.png)",
    //     // width: "600px",
    //     // height: "600px",
    //     width: "1000px",
    //     height: "1000px",
    //     backgroundsize: "cover",
    // };

    return (
        <section className="home">
             <div className="hm_contents"> {/* style={containerStyle}*/}
                <h2 className='hm_title'>서비스소개</h2>
                <Link to={"/service_intro"}>
                <button className="hm_start">시작하기</button>
                </Link>
                {/* <img src='C:/web/sonsu_web/src/component/layout/images/hand.png'></img> */}
                {/* <background><img className="handImage" alt="hand" src="img/hand.png" /></background> */}
                <div ></div>
                {/* <div className='bg_img'></div> */}
            </div>
        </section>
    )
}

export default Home