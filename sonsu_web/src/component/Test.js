import React from 'react';
import { useLocation } from 'react-router-dom';
import Webcam from "react-webcam";
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
            <Webcam
                audio={false}
                mirrored={true}
                height={720}
                width={1280}
            ></Webcam>
        </div>
    );
}

function Testsidebar(){
    const chapter = useLocation().state.grade;
    console.log(chapter);
    return(
        <div className="Testsidebar">
            {
                {
                    cho : <h1>초급</h1>,
                    jung : <h1>중급</h1>,
                    go : <h1>고급</h1>,
                }[chapter]
            }
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