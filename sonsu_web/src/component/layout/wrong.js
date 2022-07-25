import './wrong.css'
import {Link} from 'react-router-dom';

const Wrong = () => {
    return (
        <section className="mypage">
            <div className="contents">
                <div class="left__body__footer">
                    <p class="emotion">정렬순서</p>
                    <Link to={"/mypage"}>
                        <button className='before'>이전</button>
                    </Link>
                    <select>
                        <option>난이도별🔽</option>
                        <option>날짜별🔽</option>
                    </select>
                </div>
                <div class="flex_container">
                    <div class="flex_item">ㄱ</div>
                    <div class="flex_item">ㄴ</div>
                    <div class="flex_item">ㄷ</div>
                    <div class="flex_item">ㄹ</div>
                    <div class="flex_item">ㅁ</div>
                </div>
                <div class="flex_container">
                    <div class="flex_item">안녕하세요</div>
                    <div class="flex_item">감사합니다</div>
                    <div class="flex_item">반가워요</div>
                </div>
            </div>
        </section>
    )
}

export default Wrong