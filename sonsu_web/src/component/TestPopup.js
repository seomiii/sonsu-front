import React from 'react';

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
            {/* 동영상 버튼 */}
        </div>
    );
}

function Testsidebar(){
    return(
        <div className="Testsidebar">
            <h1>초급</h1>
            <ul>                
                <li>1번 문제</li>
                <li>2번 문제</li>
                <li>3번 문제</li> 
                <li>4번 문제</li>
                <li>5번 문제</li>    
            </ul>
        </div>
    );
}

export default TestPopup;