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
} from './../component_css/Wrong_style';

moment.locale('ko-KR');
const localizer = momentLocalizer(moment);

// const allViews = Object
//   .keys(Calendar.Views)
//   .map(k => Calendar.Views[k])

const Wrong = () => {
    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <WrongDiv>
                <WrongTitle>
                    오답노트
                </WrongTitle>
                <WrongContent>
                    <Wrongcalendar>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            style={{ height: 500 }}
                            step={60}
                            // views={allViews}
                            defaultDate={new Date(2015, 3, 1)}
                        />
                    </Wrongcalendar>
                </WrongContent>
            </WrongDiv>
        </>
    )
}

export default Wrong
