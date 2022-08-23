import {Link} from 'react-router-dom';

const Service_intro = () => {
    return (
        <section className="service_intro">
            <div className="ser_contents">
                <div className="ser_title">
                    <h2>서비스 소개</h2>
                </div>
                <div className='ser_level'>
                    <div className="ser_title1">
                        <h4>초급</h4>
                    </div>
                    <div className="ser_intro1">
                        <h5>자음과 모음, 지숫자와 같은 기본적인 문자구성요소에 대한 수어를 배웁니다.</h5>
                    </div>
                    <div className="ser_title2">
                        <h4>중급</h4>
                    </div>
                    <div className="ser_intro2">
                        <h5>일상 대화에서 쓸 수 있는 인사말, 기본회화에 대한 수어를 배웁니다.</h5>
                    </div>
                    <div className="ser_title3">
                        <h4>고급</h4>
                    </div>
                    <div className="ser_intro3">
                        <h5>문장을 구성하는 단어에 대한 수어를 배웁니다.</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service_intro