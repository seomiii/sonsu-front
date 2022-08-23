import {Link} from 'react-router-dom';
import {
    WrongTitle,
    WrongDiv,
    WrongContent
} from './../component_css/Wrong_style';

const Wrong = () => {
    return (
        <>
            <WrongTitle>
                오답노트
            </WrongTitle>
            <WrongDiv>
                <WrongContent>2022</WrongContent>
                <WrongContent>05/23</WrongContent>
                <WrongContent>1회차 | 2회차 | 3회차</WrongContent>
                <WrongContent>영상</WrongContent>
                <WrongContent>시작하기</WrongContent>
            </WrongDiv>
        </>
    )
}

export default Wrong