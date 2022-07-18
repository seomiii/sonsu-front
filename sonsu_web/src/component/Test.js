import '../component_css/Test.css';
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import Webcam from "react-webcam";
import axios from 'axios';

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
    const chapter = useLocation().state.grade;
    return(
        <div style={{marginLeft: 20, marginBottom: 30}} className="Testheader" align="left" >
            <Link to={"/test_home"}>
                <button className='back'>&lt; &nbsp; 돌아가기</button>
            </Link>
            &emsp;
            {
                {
                    cho : <h3 style={{display: 'inline'}}>초급</h3>,
                    jung : <h3 style={{display: 'inline'}}>중급</h3>,
                    go : <h3 style={{display: 'inline'}}>고급</h3>,
                }[chapter]
            }
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
        handleStopCaptureClick();
        
        useEffect(() => {
            if(recordedChunks.length){
                const blob=new Blob(recordedChunks,{type:'video/webm'});
                
                let filename=new Date().toString()+'.avi';
                const file=new File([blob],filename);
          
                let fd=new FormData();
                fd.append('file',file);
          
                for (let key of fd.keys()) {
                  console.log(key);
                }
          
                console.log('*');
                
                // FormData의 value 확인
                for (let value of fd.values()) {
                  console.log(value);
                }
          
                axios.post('/model',fd)
                  .then((res)=>{
                    alert("결과 : " + res.data);
                    console.log(res);})
                  .catch((err)=>{
                  alert("error");
                  console.log(err)
                },[recordedChunks]);
              }
          
              else{
                console.log("녹화를 해주세요");
              }
        }, [recordedChunks]);

        
    }

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
                <button className='webcam' onClick={Send}>촬영 멈춤</button>
            ) : (
                <button className='webcam' onClick={handleStartCaptureClick}>촬영 시작</button>
            )}
        </div>
    );
}

function Testsidebar(){
    const chapter = useLocation().state.grade;
    return(
        <div className="Testsidebar">
            {
                {
                    cho : <h3 className='title_'>초급</h3>,
                    jung : <h3 className='title_'>중급</h3>,
                    go : <h3 className='title_'>고급</h3>,
                }[chapter]
            }
                <button className='question_'>1번 문제</button>
                <li className='question'>2번 문제</li>
                <li className='question'>3번 문제</li>
            <br/>

            <button className='webcam'>이전 문제로</button><button className='webcam'>다음 문제로</button>
        </div>
    );
}

export default Test;