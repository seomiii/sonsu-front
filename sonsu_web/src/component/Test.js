import '../component_css/Test.css';
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import Webcam from "react-webcam";
import axios from 'axios';

const Levels=[
    {
        level : 1,
        level_name : '초급'
    }
    ,
    {
        level : 2,
        level_name : '중급'
    }
    ,
    {
        level : 3,
        level_name : '고급'
    }    
]



function Test() {
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

function Testheader(){
    const level = useLocation().state.level;
    const level_name=Levels[(level-1)].level_name;

    return(
        <div style={{marginLeft: 20, marginBottom: 30}} className="Testheader" align="left" >
            <Link to={"/test_home"}>
                <button className='back'>&lt; &nbsp; 돌아가기</button>
            </Link>
            &emsp;
            <h3 style={{display: 'inline'}}>{level_name}</h3>
        </div>
    )
}

function Testdetail(){
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
          if (data.size > 0) {
            setRecordedChunks((prev) => prev.concat(data));
          }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback( async () => {
        mediaRecorderRef.current.stop();
              setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]); 

    const Send=()=>{
        if(recordedChunks.length){
            const blob=new Blob(recordedChunks,{type:'video/webm'});
            
            let filename=new Date().toString()+'.avi';
            const file=new File([blob],filename);
        
            let fd=new FormData();
            fd.append('file',file);
        
            axios.post('/model',fd)
                .then((res)=>{
                    alert("결과 : " + res.data);
                })
                .catch((err)=>{
                alert("error");
                console.log(err)
            },[recordedChunks]);
        }
    
        // else{
        //     alert("녹화를 해주세요");
        // }
    }

    // 완벽하지 않은 useEffect : 처음 render될 때도 Send()함수가 실행됨
    useEffect(() => {
        Send();
    }, [recordedChunks.length]);


    return(
        <div className="Testdetail" align="center">
            <Webcam
                audio={false}
                mirrored={true}
                height={500}
                width={700}
                ref={webcamRef}
                // padding={100}
            ></Webcam>
            <br/>

            {capturing ? (
                // <button className='webcam' onClick={() => {handleStopCaptureClick(); Send();}}>촬영 멈춤</button>
                <button className='webcam' onClick={handleStopCaptureClick}>촬영 멈춤</button>
            ) : (
                <button className='webcam' onClick={handleStartCaptureClick}>촬영 시작</button>
            )}
        </div>
    );
}

function Testsidebar(){
    let [currentnumber, setNumber] = useState(1);
    const level = useLocation().state.level;
    const level_name=Levels[(level-1)].level_name;
    // 서버에서 테스트하기 문제를 받아오는 코드로 추후 변경해야함
    const problems = ['ㄴ', 'ㄱ', 'ㅓ'] // 서버에서 받아온 테스트하기 문제들
    
    function moveProblem(idx) {
        setNumber(currentnumber = idx);
        console.log(problems[idx-1]);
        // console.log(currentnumber)
    }
    function nextProblem() {
        if ( 0 < currentnumber && currentnumber < 3) {
            setNumber(currentnumber + 1);
        }
    }
    function prevProblem() {
        if ( 1 < currentnumber && currentnumber < 4) {
            setNumber(currentnumber - 1);
        }
    }

    const problemList = problems.map((problem, index)=> <div key={problem}><button onClick={() => {moveProblem(index+1);}} className='problem'>{ index+1 + "번 문제"}</button> <br/> </div>)

    return(
        <div className="Testsidebar">
            <h3 className='title_'>{level_name}</h3>
            <ol>
                {problemList}
            </ol>

            <br/>
            <p> {currentnumber} / {problems.length} </p>

            <button onClick={prevProblem} className='webcam'>이전 문제로</button><button onClick={nextProblem} className='webcam'>다음 문제로</button>
        </div>
    );
}

export default Test;
