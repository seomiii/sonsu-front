import './grade.css'
import {Link} from 'react-router-dom';

const Grade = () => {
    return (
        <section className="mypage">
            <div className="contents">
                <h2 className='title'>성적표</h2>
                <Link to={"/mypage"}>
                <button className='before'>이전</button>
                </Link>
                <div class="flex_container">
                    <div class="flex_item">초급</div>
                    <div class="flex_item">중급</div>
                    <div class="flex_item">고급</div>
                </div>
                <div class="grade_table">
                    <table class="list">
                        {/* <th><input type="checkbox"></th> */}
                        <th>번호</th>
                        <th>채점</th>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>1</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>2</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>3</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>4</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>5</td>
                            <td>O</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Grade