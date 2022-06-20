import React from 'react';
import Webcam from "react-webcam";

const WebcamStreamCapture = () => {
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
      
  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
          setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]); 

  const Send=()=>{
    if(recordedChunks.length){
      const blob=new Blob(recordedChunks,{type:'video/webm'});
      
      //Sat Sep 01 2018 14:53:26 GMT+0900 (KST)
      let filename=new Date().toString()+'.avi';
      const file=new File([blob],filename);
      //const file=new File([blob],filename,{lastModified:new Date().getTime(),type:blob.type});

      let fd=new FormData();
      fd.append('fname',filename);
      fd.append('file',file);

      for (let key of fd.keys()) {
        console.log(key);
      }
      console.log('*');      
      for (let value of fd.values()) {
        console.log(value);
      }
      
       fetch('/model',{
        method:'POST',
        body: fd,
      })
      .then((fd)=>{console.log('success',fd)})
      .catch((error)=>{console.log('Error:',error);}
      );
      
      // axios.post('/model',fd)
      // .then((res)=>{console.log(res);})
      // .catch((err)=>{
      // alert("error");
      // console.log(err)
      // },[recordedChunks]);

     

      // var request=new XMLHttpRequest();
      // request.open('POST','/model');
      // request.send(fd);
    }

    else{
      console.log("녹화를 해주세요");
    }
  }

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={false} mirrored={true} ref={webcamRef} />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}

      <button onClick={Send}>pp</button>

      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </>
  );
};

export default WebcamStreamCapture;