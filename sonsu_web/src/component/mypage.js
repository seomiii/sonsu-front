import '../component_css/mypage.css'
import {Link} from 'react-router-dom';
// import Chart from 'react-apexcharts';

const Mypage = (props) => {
    return (
        <section className="mypage">
            <div className="layout">
                <div className="contents">
                    <div className='side'>
                        <div className='side_title'><h3>프로필</h3></div>
                        <div className='side_profile'>
                            <div className='profile_img'>
                                이미지
                            </div>
                            <div className='profile_content'>
                                <div className='content'> 최정윤 </div>
                                <div className='content'> chjy1819@naver.com </div>
                                <div className='content'> 수강 시작 12일째 </div>
                            </div>
                        </div>
                        <div className='side_menu'>
                            <div className='edit'><button className='side_menu_bt'>개인정보수정</button></div>
                            <Link to={"/grade"}>
                                <div className='grade'><button className='side_menu_bt'>성적표</button></div>
                            </Link>
                            <Link to={"/wrong"}>
                                <div className='wrong'><button className='side_menu_bt'>오답노트</button></div>
                            </Link>
                        </div>
                    </div>
                    <div className='body'>
                        <div className='body_study'>
                            수업 진행상황
                        </div>
                        <div className='body_test'>
                            테스트 진행상황
                        </div>
                    </div>
                </div>
            </div>
            {/* <Chart options={options} series={series} type="radialBar" height="50" /> */}
        </section>
    )

}

export default Mypage