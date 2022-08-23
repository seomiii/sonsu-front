import {Link} from 'react-router-dom';

const Wrong = () => {
    return (
        <section className="wrong">
            <div className="wr_contents">
                <h2>오답노트</h2>
                <div class="wr_date">
                    {/* <p class="emotion">정렬순서</p>
                    <Link to={"/mypage"}>
                        <button className='before'>이전</button>
                    </Link> */}
                    연도별  
                    <select>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </select>
                    월별  
                    <select>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div class="grade_table">
                    <table class="list">
                        {/* <th><input type="checkbox"></th> */}
                        {/* <th>번호</th>
                        <th>채점</th> */}
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>2022/05/29</td>
                            <td>
                                <div class="wr_wrapper">
                                    <Link to={"/wrong_repeat"}>
                                        <div class="wr_lv1">초급</div>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">중급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">고급</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>2022/05/29</td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">초급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">중급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">고급</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>2022/05/29</td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">초급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">중급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">고급</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>2022/05/29</td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">초급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">중급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">고급</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            {/* <td><input type="checkbox"></td> */}
                            <td>2022/05/29</td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">초급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">중급</div>
                                </div>
                            </td>
                            <td>
                                <div class="wr_wrapper">
                                    <div class="wr_lv1">고급</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                {/* <div class="wr_contain">
                    2022/05/29
                    <div class="wr_wrapper">
                        <div class="wr_lv1">초급</div>
                    </div>
                    <div class="wr_wrapper">
                        <div class="wr_lv1">중급</div>
                    </div>
                    <div class="wr_wrapper">
                        <div class="wr_lv1">고급</div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Wrong