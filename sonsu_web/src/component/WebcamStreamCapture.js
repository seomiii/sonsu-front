import React,{useState, useCallback, useRef, useEffect} from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { 
PlayTitleDiv,
Logo,
PlayLevel,
PlayVideos,
CamDiv,


 } from './../component_css/Study_style';

// 프론트 고정 소스
const Levelname=['초급','중급','고급'];



const WebcamStreamCapture = () => {

  const word_id = useLocation().state.word_id;
  const level=useLocation().state.level;

  const [flaskResult,setFlaskResult]=useState(false);  

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
      
  const handleStartCaptureClick = useCallback(() => {
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

      
  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );
      
  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]); 


  // 영상을 모델서버에게 전달
  const Send=()=>{
    
    if(recordedChunks.length){
      const blob=new Blob(recordedChunks,{type:'video/webm'});
      
      let filename=new Date().getTime().toString(36)+'.avi';
      //let filename= word_id.toString()+'avi';
      
      const file=new File([blob],filename);
      //const file=new File([blob],filename,{lastModified:new Date().getTime(),type:blob.type});
      //console.log(file);

      let fd=new FormData();
      // fd.append('fname',filename);
      // fd.append('test','hi');
      fd.append('file',file);    
      fd.append('word_id', word_id)

      axios.post('/model/study',fd)
        .then((res)=>{
          setFlaskResult(res.data);
          alert("결과 : " + res.data);
          console.log(res);
        })

        .catch((err)=>{
        alert("error");
        console.log(err);

      },[recordedChunks]);  

    }

    else{
      console.log("녹화를 해주세요");
    }
  }

  useEffect(()=>{
    Send();
  },[recordedChunks.length]);


  // 모델 서버에서 온 결과를 서버에게 전달
  const SendToServer = () => {
    axios.post('study/{level}/{word_id}/{user_id}/{flaskResult}',{
      user_id:'miseomiseo',
      level: (level),
      result: flaskResult
    })
    .then((res)=>{
      console.log(res);
    })
  }


  return (
    <>
      <PlayTitleDiv>
          <Logo src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>                
          <PlayLevel>{Levelname[(level-1)]}</PlayLevel>
      </PlayTitleDiv>

      <PlayVideos>

        <CamDiv>
          <Webcam audio={false} mirrored={true} ref={webcamRef}  width={100+'%'} height={100+'%'} />          
        </CamDiv>

        {capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}

        {recordedChunks.length > 0 && (
          //
          <button onClick={SendToServer}>결과 보기</button>
        )}

    </PlayVideos>

    </>
  );
};

export default WebcamStreamCapture;


// const handleDownload = useCallback(() => {
//   if (recordedChunks.length) {
//     const blob = new Blob(recordedChunks, {
//       type: "video/webm"
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";
//     a.href = url;
//     a.download = "react-webcam-stream-capture.webm";
//     a.click();
//     window.URL.revokeObjectURL(url);
//     setRecordedChunks([]);
//   }
// }, [recordedChunks]);
