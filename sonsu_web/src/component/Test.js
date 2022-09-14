import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import Webcam from "react-webcam";
import axios from 'axios';
import { PlayTitleDiv,PlayLevel,Logo,PlayVideos,MenuBar,MenuDiv,MenuCurriDiv, MenuCurri,
PlayWords,PlayWord } from '../component_css/Study_style';
import {TestNumberDiv,TestDiv,TestNumber,CamDiv,FollowDiv,FollowBtn
,ShowResultBtn,NextBtn,TestWord,CurWordHeadDiv,CurWord,PlayTestWords,PlayTestWord,NextDiv} from '../component_css/Test_style'


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

//서버에서 오는 예상 데이터
// const data={
// 	testIdx : 1,

// 	wordsDTO : [
// 		{
// 				testNo : 1,
// 				wordName : "ㄱ(기역)",
// 				wordNum : "11001",
// 				testlistIdx : 1
// 		},
// 		{
// 				testNo : 2,
// 				wordName : "ㄷ(디귿)",
// 				wordNum : "11003",
// 				testlistIdx : 2
// 		},
// 		{
// 				testNo : 3,
// 				wordName : "ㄴ(니은)",
// 				wordNum : "11002",
// 				testlistIdx : 3
//         },			
// 		]
//     }

// ---------------------- 리소스 --------------------------------

function Test() {
    const levelIdx=useLocation().state.level;
    // console.log(levelIdx);

    //현재 문제 번호
    let [currentnumber, setNumber] = useState(1);
    const [flaskResult,setFlaskResult]=useState(false);    
    let [isLast,setIsLast]=useState(false);
    const [data,setData]=useState();

    // 문제 요청
    useEffect(()=>{
        axios.post(`/test/${levelIdx}`,{
        userIdx:'1'
    })
     .then((response)=>{
         setData(response.data.data);
         console.log(response.data.data);
    })
    },[]);

    //결과 보기 버튼 활성화
    let wordslength=data&& data.wordsDto.length;
    useEffect(()=>{
        if (currentnumber == wordslength){
            setIsLast(true);
        }
        else{
            setIsLast(false);
        }     
    },[currentnumber]);

    

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
            
            //let filename=new Date().toString()+'.avi';
            let filename=new Date().getTime().toString(36)+'.avi';
            const file=new File([blob],filename);
        
            let fd=new FormData();
            fd.append('file',file);
            fd.append('wname', data&& data.wordsDto[currentnumber-1].wordNum)
            fd.append('testindex', testIdx)
        
            axios.post('/model/test',fd)
                .then((res)=>{
                    // setFlaskResult(res.data);
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

    let testIdx=data&& data.testIdx;
    console.log(testIdx);
 
    // testIdx : (testIdx),
    // .catch((err)=>alert("error"));

    const SumbitTest=()=>{     
        axios.patch(`/test/${levelIdx}`,{
            testIdx : (testIdx)
           
        })
        .then((res)=>{
            console.log(res);
        })        
    }

 
    return (
        <>
            <PlayTitleDiv>
                <Link to='/'>
                    <Logo src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>  
                </Link>              
                <PlayLevel>{Levels[levelIdx-1].level_name}</PlayLevel>
            </PlayTitleDiv>

        <PlayVideos>

            <TestDiv>
                {/* <TestNumberDiv>
                    <TestNumber>
                    {currentnumber} .
                    </TestNumber> 
                    <TestWord>
                    {data&& data.wordsDto[currentnumber-1].wordName}
                    </TestWord>                 
                </TestNumberDiv> */}
                <CamDiv>
                    <Webcam audio={false} mirrored={true} ref={webcamRef}  width={100+'%'} height={100+'%'} />          
                </CamDiv>  
            </TestDiv> 

            <MenuBar>
                <MenuDiv>
                    <CurWordHeadDiv>
                        문제 {currentnumber}
                    </CurWordHeadDiv>
                    <CurWord>                    
                        {data&& data.wordsDto[currentnumber-1].wordName}
                    </CurWord>
            
                </MenuDiv>

                <PlayTestWords>
                    {data&& data.wordsDto.map(i=>(                                
                        <PlayTestWord onClick={()=>setNumber(i.testNo)}>{i.testNo}번</PlayTestWord>
                    ))}
                </PlayTestWords> 

                {/* <NextDiv isLast={isLast}> */}
                    <NextBtn isLast={isLast} onClick={()=>setNumber(currentnumber+1)}>다음 문제로 넘어가기</NextBtn>

                    <Link to='/testresult' state={{
                        level : (levelIdx) ,
                        testIdx : (testIdx),                        
                    }}>
                    <ShowResultBtn isLast={isLast} onClick={SumbitTest}>결과 보기</ShowResultBtn>
                    </Link>
                {/* </NextDiv>          */}

                {/* <FollowDiv>      */}
                {capturing ? (
                    <FollowBtn onClick={handleStopCaptureClick}>촬영 끝내기</FollowBtn>
                ) : (
                    <FollowBtn onClick={handleStartCaptureClick}>촬영 시작하기</FollowBtn>
                )}
                {/* </FollowDiv>   */}

                


            </MenuBar>              

        </PlayVideos>

        </>
    );
}

export default Test;
