import '../component_css/wrong_repeat.css'
import {Link} from 'react-router-dom';

const Wrong = () => {
    return (
        <section className="wrong">
            <div className="wr_contents">
                <h2>오답노트</h2>
                <div>2022</div>
                <div>05/23</div>
                <div> 1회차 | 2회차 | 3회차 </div>
                <div> 영상 </div>
                <div><button>시작하기</button></div>
            </div>
        </section>
    )
}

export default Wrong