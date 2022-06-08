import './mypage.css'
import {Link} from 'react-router-dom';
import Chart from 'react-apexcharts';

const Mypage = (props) => {
    const { dataAvg, dataLabel } = props;

    const options = {
        chart: {
            height: 50,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '60%' // bar 굵기
                },
                dataLabels: {
                    showOn: 'always',
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '16px'
                    },
                    value: {
                        color: '#111',
                        fontSize: '32px',
                        show: true
                    }
                }
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: [dataLabel]
    };
    const series = [dataAvg]; // %

    return (
        <section className="mypage">
            <div className="contents">
                <h2 className='title'>마이페이지</h2>
                <h3 className='ing'>진행현황</h3>
                <Link to={"/"}>
                    <button className='before'>이전</button>
                </Link>
                <Link to={"/wrong"}>
                <button className='wrong'>오답노트</button>
                </Link>
                <Link to={"/grade"}>
                <button className='grade'>성적표</button>
                </Link>
                <Chart options={options} series={series} type="radialBar" height="50" />
            </div>
        </section>
    )

}

export default Mypage