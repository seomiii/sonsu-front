import React from 'react';
import Webcam from "react-webcam";
import {Button,Paper} from '@material-ui/core'
import '../component_css/Study.css';
import "react-router-dom";

import video from "../ㄱ.mp4";


function Study_play({history}){
    return(
        <div className='study_play'>  
            <Play_video/>
            <Play_menubar/>

            <div className='play_button_display'>
                <Play_button/>
            </div>
            
            {/* <Webcam 
            // 거울모드 적용
            mirrored={true}
            /> */}
            {/* <Paper>팝업입니다.</Paper> */}
        </div>
    );
}

function Play_video(){
    return(
        <div>
            <video width='960' height='540' controls="controls">
                {/* <source src={require("../ㄱ.mp4")} type="video/mp4"/> */}
                <source src={video} type="video/mp4"/>
            </video>        
        </div>
    );
}

function Play_menubar(){
    return(
        <div>
            <Paper>초급</Paper>
            <ol>
                <Button><li>ㄱ</li></Button>
                <Button><li>ㄴ</li></Button>
                <Button><li>ㄷ</li></Button>
                
            </ol>      
        </div>
    );
}

function Play_button(){
    return(
        <div className='play_button'>
            <Button>◀️</Button>
            <Button>학습하기</Button>
            <Button>▶️</Button>
        </div>
    );

}

export default Study_play;