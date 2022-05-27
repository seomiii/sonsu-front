import React from 'react';
import Webcam from "react-webcam";
import {Button,Paper} from '@material-ui/core'
import '../component_css/Study.css';


function Study_play(){
    return(
        <>  
            <Webcam 
            // 거울모드 적용
            mirrored={true}
            />
            <Paper>팝업입니다.</Paper>
        </>
    );
}

export default Study_play;