import '../component_css/Study.css';
import React from 'react';
import Webcam from "react-webcam";
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link } from 'react-router-dom';


function Study_play(props){
    const chapter=useLocation().state.level;
    const curri=useLocation().state.curri;  
    const video_src=useLocation().state.video_src;
    const video_index=useLocation().state.video_index;  
    const location = useLocation();

    console.log("hihihihi")
    console.log(location);

    console.log(chapter,curri,video_src,video_index);
    console.log(video_src.i)  

    return(
        <div className='study_play'>  
            <Play_video video_src={video_src.i}/>
            {
                {
                    1 : 
                        <>
                            <Play_header title={"초급"}></Play_header>
                            <Play_menubar curri={curri} index={video_index.index}/>
                        </>,
                    2 : <></>,
                    3 : <></>,
                }[chapter]
            }
            
            
            {/* <Webcam 
            // 거울모드 적용
            mirrored={true}
            /> */}
            {/* <Paper>팝업입니다.</Paper> */}
        </div>
    );
}

function Play_header(props){
    return(
        <>
            <h2>{props.title}</h2>
        </>
    );
}

function Play_video(props){
    return(
        <div>
            <video src={props.video_src} width='268' height='164' controls="controls"/>
        </div>
    );
}

function Play_menubar (props) {
    const cur_list = [
        {curr : '자음', items : ['ㄱ','ㄴ']},
        {curr : '모음', items : ['ㅏ']},
    ]
    
    // 현재 어떤 커리를 수행중인지
    const curri_name=props.curri;   
    // 현재 수행중인 커리에는 무슨 단어들이 있는지
    const cur_plays=cur_list.filter(function(x){return x.curr==curri_name});    

    //현재 수강중인 단어
    console.log(cur_plays[0].items[props.index]);
    let cur_word = cur_plays[0].items[props.index];
    //현재 수강중인 커리 단어들
    console.log(cur_plays[0].items);    
    let cur_words = cur_plays[0].items;

    return (
        <>
            <ul>
                <li>{props.curri}</li>
                {/* <li>{cur_words}</li> */}
                {cur_words.map((i,index)=>(<li>{i}</li>))}

                <Link to={"/webcam"} >
                    <Button>따라하기</Button>
                </Link>
            </ul>
        
        </>
    );
}



export default Study_play;