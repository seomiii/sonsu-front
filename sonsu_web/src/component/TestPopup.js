import React from 'react';
import ReactPlayer from 'react-player';
import '../component_css/TestPopup.css';

class TestPopup extends React.Component{

    render(){
        return (
            <div className='TestPopup'>
                <Testdetail />
                <Testsidebar />
            </div>
        );
    }
}

function Testdetail(){
    return(
        <div className="Testdetail">
            {/* 동영상 팝업 */}
            {/* 이동 버튼 */}
            <h1>
                동영상 팝업입니다. 우선 시범적으로 유튜브 영상을 넣었습니다.
            </h1>
            <ReactPlayer
                    className='reactplayer'
                    url={'https://youtu.be/BjOPmIcC_fo'}    // 플레이어 url
                    width='100%'         // 플레이어 크기 (가로)
                    height='1000px'        // 플레이어 크기 (세로)
                    controls={true}       // 플레이어 컨트롤 노출 여부
                />
        </div>
    );
}

function Testsidebar(){
    return(
        <div className="Testsidebar">
            <h1>초급</h1>
            <ul>                
                <ol type="1">
                    <li>1번 문제</li>
                    <li>2번 문제</li>
                    <li>3번 문제</li> 
                    <li>4번 문제</li>
                    <li>5번 문제</li>    
                </ol>
            </ul>
        </div>
    );
}

export default TestPopup;