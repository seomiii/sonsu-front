import '../component_css/TestPopup.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Webcam from "react-webcam";

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
                // height={720}
                // width={1280}
                height={500}
                width={900}
                padding={100}
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
                    cho : <h3 className='title_'>초급</h3>,
                    jung : <h3 className='title_'>중급</h3>,
                    go : <h3 className='title_'>고급</h3>,
                }[chapter]
            }
            <ul>                
                <ol type="1">
                    <li className='question_'>1번 문제</li>
                    <li className='question'>2번 문제</li>
                    <li className='question'>3번 문제</li> 
                    <li className='question'>4번 문제</li>
                    <li className='question'>5번 문제</li>    
                </ol>
            </ul>
        </div>
    );
}

export default TestPopup;