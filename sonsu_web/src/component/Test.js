import '../component_css/Test.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import Webcam from "react-webcam";

class Test extends React.Component{

    render(){
        return (
            <div className='Test'>
                <Grid container>
                    <Grid item xs={12}>
                        <Testheader />
                    </Grid>
                    <Grid item xs={9}>
                        <Testdetail />
                    </Grid>
                    <Grid item xs={3}>
                        <Testsidebar />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function Testheader(){
    return(
        <div style={{marginLeft: 20, marginBottom: 30}} className="Testheader" align="left" >
            <Link to={"/test_home"}>
                <button className='back'>&lt; &nbsp; 돌아가기</button>
            </Link>
            &emsp; 초급
        </div>
    )
}

function Testdetail(){
    return(
        <div className="Testdetail" align="center">
            <Webcam
                audio={false}
                mirrored={true}
                // height={720}
                // width={1280}
                height={500}
                width={700}
                // padding={100}
            ></Webcam>
            <br/>
            <button className='webcam'> 촬영 시작 </button>
            &emsp;
            <button className='webcam'> 결과 보기 </button>
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
                <li className='question_'>1번 문제</li>
                <li className='question'>2번 문제</li>
                <li className='question'>3번 문제</li> 
                <li className='question'>4번 문제</li>
                <li className='question'>5번 문제</li>
            <br/>

            <button className='webcam'>이전 문제로</button><button className='webcam'>다음 문제로</button>
        </div>
    );
}

export default Test;