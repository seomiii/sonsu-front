import React,{useState} from 'react';
import { useLocation,Link } from 'react-router-dom';
import {Button,Paper} from '@material-ui/core'


function Study_class(props) {
    const chapter = useLocation().state.level;

    console.log(chapter);

    return(
        <>
            {
                {
                    1 : <Class_hole title={"초급"} curriArr={["자음","모음"]}/>,
                    2 : <Class_hole title={"중급"} curriArr={["인삿말"]}/>,
                    3 : <Class_hole title={"고급"} curriArr={["단어"]}/>,
                }[chapter]
            }                    
        </>
    );
}

function Class_hole(props) {
    const video_name_ja=['/videos/ㄱ.mp4','/videos/ㄴ.mp4'];
    const video_name_mo=['/videos/ㅏ.mp4'];
    const video_title_ja=[
        ['ㄱ','ㄱ을 배워봅시다'],
        ['ㄴ','ㄴ을 배워봅시다']];
    const video_title_mo=[['ㅏ','ㅏ을 배워봅시다']];

    let [cur_curri, setCurri]=useState(0);

    const chooseCurri=()=>{
        switch(cur_curri){
            case '자음':
                return <>{videoArr_ja}</>
            case '모음':
                return <>{videoArr_mo}</>
            default:
                return <>{videoArr_ja}</>
        }
    }
    
    // 자음 영상 리스트
    const videoArr_ja = video_name_ja.map((i,index)=>(     
    <>  
        <Paper>
            <video key={i} src={i} width='268' height='164' controls="controls"/>
            <h2>{video_title_ja[index][0]}</h2>
            <div>{video_title_ja[index][1]}</div>

            <Link to={"../study_play"} state={ {level: 1, curri : '자음', video_src : {i}, video_index:{index}} }>
                <Button>이 강좌 수강하기</Button> 
            </Link>
        </Paper>
    </>    
    ))

    // 모음 영상 리스트
    const videoArr_mo = video_name_mo.map((i,index)=>(     
        <>  
            <Paper>
                <video key={i} src={i} width='268' height='164' controls="controls"/>
                <h2>{video_title_mo[index][0]}</h2>
                <div>{video_title_mo[index][1]}</div>

                
                <Button>이 강좌 수강하기</Button> 
                

            </Paper>
        </>    
        ))
    
    // curri 리스트
    const curriArr= props.curriArr.map((curri,index)=> (
        <>
            <Button onClick= {()=> setCurri(curri)}>
                <li key={index}>{curri}</li>
            </Button>           
        </>          
    ))

    return(
        <div>
            <h2>{props.title}</h2>            
            {curriArr}
            {chooseCurri()}                         
        </div>
    );
}













// function Class_list(props){
//     const video_name=['/videos/ㄱ.mp4','videos/ㄴ.mp4'];

//     // let curri=this.props.cur_curri;

//     return(
//         <>
//             <h1>{props.curri}</h1>

//             {video_name.map(i=> (
//             <>
//                 <video key={i} src={i} width='268' height='164' controls="controls"/>
//                 <div>hi</div>
//             </>
//             )
//             )}
            
            
//         </>

//     );
// }


export default Study_class;