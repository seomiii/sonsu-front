import {Link} from 'react-router-dom';
import events from './events';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Header from './header'
import { HeaderDiv } from '../component_css/Home_style';
import {
    WrongTitle,
    WrongDiv,
    WrongContent,
    Wrongcalendar,
    WrongText,
} from '../component_css/Wrong_style';
// import { Toolbar } from '@material-ui/core';
import Toolbar from './Toolbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// const allViews = Object
//   .keys(Calendar.Views)
//   .map(k => Calendar.Views[k])

const Wrong = () => {
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);

    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <WrongDiv>
                <WrongTitle>
                    <img src='img/bar.png' alt="image"/>
                    <WrongText>
                        오답노트
                    </WrongText>
                </WrongTitle>
                <WrongContent>
                    <Wrongcalendar>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            style={{ height: 500 }}
                            step={60}
                            // views={allViews}
                            // defaultDate={new Date(2015, 3, 1)}
                            components={{
                                toolbar: Toolbar,
                            }}
                        />
                    </Wrongcalendar>
                </WrongContent>
            </WrongDiv>
        </>
    )
}

export default Wrong
