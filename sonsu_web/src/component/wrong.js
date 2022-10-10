import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import events from './events';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Header from './header'
import { HeaderDiv } from '../component_css/Home_style';
import { Myheader } from './../component_css/Mypage_style';
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv } from '../component_css/Study_style';
import {
    WrongTitle,
    WrongDiv,
    WrongContent,
    WrongText,
    WrongList,
    WrongListContent,
    WrongDay,
    WrongBtn,

} from '../component_css/Wrong_style';
// import { Toolbar } from '@material-ui/core';
import Toolbar from './Toolbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/dist/react-big-calendar.css'; // css import

// const allViews = Object
//   .keys(Calendar.Views)
//   .map(k => Calendar.Views[k])

const Wrong = () => {
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);
    const [value, onChange] = useState(new Date());

    return (
        <>
            {/* <Myheader> */}
                <HeaderDiv>
                    <Header/>
                </HeaderDiv>
            {/* </Myheader> */}
            <MediaDiv>
                <FadeHome>
                    <WrongDiv>
                        <WrongTitle>
                            <img src='img/bar.png' alt="image"/>
                            <WrongText>
                                오답노트
                            </WrongText>
                        </WrongTitle>
                        <WrongContent>
                            <WrongList>
                                <WrongListContent>
                                    <WrongDay>
                                        10월 29일
                                    </WrongDay>
                                    <Link to={"/wrong_repeat"} style={{ textDecoration: 'none' }}>
                                        <WrongBtn>
                                            초급
                                        </WrongBtn>
                                    </Link>
                                    <WrongBtn>
                                        중급
                                    </WrongBtn>
                                    <WrongBtn>
                                        고급
                                    </WrongBtn>
                                </WrongListContent>
                                <WrongListContent>
                                    <WrongDay>
                                        10월 29일
                                    </WrongDay>
                                    <WrongBtn>
                                        초급
                                    </WrongBtn>
                                    <WrongBtn>
                                        중급
                                    </WrongBtn>
                                    <WrongBtn>
                                        고급
                                    </WrongBtn>
                                </WrongListContent>
                                <WrongListContent>
                                    <WrongDay>
                                        10월 29일
                                    </WrongDay>
                                    <WrongBtn>
                                        초급
                                    </WrongBtn>
                                    <WrongBtn>
                                        중급
                                    </WrongBtn>
                                    <WrongBtn>
                                        고급
                                    </WrongBtn>
                                </WrongListContent>
                            </WrongList>
                        </WrongContent>
                    </WrongDiv>
                </FadeHome>
            </MediaDiv>
        </>
    )
}

export default Wrong