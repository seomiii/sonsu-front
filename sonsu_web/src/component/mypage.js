import '../component_css/mypage.css'
import Chart from "./chart/chart";
import {Link} from 'react-router-dom';
// import Chart from 'react-apexcharts';

const Mypage = (props) => {
    return (
        <section className="mypage">
            <div className="my_layout">
                <div className="my_contents">
                    <div className='my_side'>
                        <div className='side_title'><h3>프로필</h3></div>
                        <div className='side_profile'>
                            <div className='profile_img'>
                                이미지
                            </div>
                            <div className='prof_contain'>
                                <div className='prof_content'> 최정윤 </div>
                                <div className='prof_content'> chjy1819@naver.com </div>
                                <div className='prof_content'> 수강 시작 12일째 </div>
                            </div>
                        </div>
                        <div className='side_menu'>
                            <div className='my_edit'><button className='side_menu_bt'> 개인정보수정 </button></div>
                            <Link to={"/grade"}>
                                <div className='my_grade'><button className='side_menu_bt'> 성적표 </button></div>
                            </Link>
                            <Link to={"/wrong"}>
                                <div className='my_wrong'><button className='side_menu_bt'>오답노트</button></div>
                            </Link>
                        </div>
                    </div>
                    <div className='my_body'>
                        <div className='my_body_study'>
                            <h3>수강 진행 상황</h3>
                            <Chart/>
                        </div>
                        {/* <div className='body_test'>
                            테스트 진행상황
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <Chart options={options} series={series} type="radialBar" height="50" /> */}
        </section>
    )

}

export default Mypage