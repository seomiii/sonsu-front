import React,{useState} from 'react';
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link } from 'react-router-dom';

//예상되는 서버에서 오는 데이터
//초급 선택시, 자음 선택시 오는 데이터
const Curris=[
    {
        curri : '자음',
        word : 'ㄱ (기역)',
        word_info : '한글 자모의 첫째 글자'
    }
    ,
    {
        curri : '자음',
        word : 'ㄴ (니은)',
        word_info : '한글 자모의 둘째 글자'
    }
    ,
    {
        curri : '자음',
        word : 'ㄷ (디귿)',
        word_info : '한글 자모의 셋째 글자'
    }
]

//프론트 고정 리소스
const Curri_Arr=[
    {
        level: 1,
        level_name:"초급",
        curri_arr: ["자음","모음"],
    },
    {
        level: 2,
        level_name:"중급",
        curri_arr: ["짧은 인삿말"],
    },
    {
        level: 3,
        level_name:"고급",
        curri_arr: ["단어"],
    }
]

// const video_name_ja=['/videos/ㄱ.mp4','/videos/ㄴ.mp4'];
// const video_name_mo=['/videos/ㅏ.mp4'];

// -----------------------리소스------------------------------------

function Study_class(props){
    const chapter=useLocation().state.level;
    console.log(chapter);

    return(
        <>
            <Class_menubar level={chapter}></Class_menubar>
            <Word/>      
        
        </>
    );
}

// 수강하기 - 단계선택 - 메뉴바 (ex. 초급 자음|모음)
function Class_menubar(props){
    const level=props.level;

    const level_name=Curri_Arr[(level-1)].level_name;
    const curri_arr=Curri_Arr[(level-1)].curri_arr;

    console.log(curri_arr);

    return(
        <>
            <h2>{level_name}</h2>

            {curri_arr.map(i=> (
                <>
                    <div>{i}</div>                
                </>
            )
            )}
        </>
    );
}

// 각 영상 하나 섹션별
function Word(props){

    return(
        <>
            
            {Curris.map(obj=>(
                <>
                    <br/>
                    <video src="/videos/ㄱ.mp4" width='268' height='164' controls="controls"/>
                    <div>{obj.word}</div>
                    <div>{obj.word_info}</div>
                </>
            )
            )}

            
        </>
    );
}



// function Study_class(props) {
//     const chapter = useLocation().state.level;
//     console.log(chapter);

//     return(
//         <>
//             {
//                 {
//                     1 : <Class_hole title={"초급"} curriArr={["자음","모음"]}/>,
//                     2 : <Class_hole title={"중급"} curriArr={["짧은 인삿말"]}/>,
//                     3 : <Class_hole title={"고급"} curriArr={["단어"]}/>,
//                 }[chapter]
//             }                    
//         </>
//     );
// }


// function Class_hole(props) {

//     const video_title_ja=[
//         ['ㄱ','ㄱ을 배워봅시다'],
//         ['ㄴ','ㄴ을 배워봅시다']];

//     const video_title_mo=[['ㅏ','ㅏ을 배워봅시다']];

//     let [cur_curri, setCurri]=useState(0);

//     const chooseCurri=()=>{
//         switch(cur_curri){
//             case '자음':
//                 return <>{videoArr_ja}</>
//             case '모음':
//                 return <>{videoArr_mo}</>
//             default:
//                 return <>{videoArr_ja}</>
//         }
//     }
    
//     // 자음 영상 리스트
//     const videoArr_ja = video_name_ja.map((i,index)=>(     
//     <>  
//         <Paper>
//             <video key={i} src={i} width='268' height='164' controls="controls"/>
//             <h2>{video_title_ja[index][0]}</h2>
//             <div>{video_title_ja[index][1]}</div>

//             <Link to={"study_play"} state={ {level: 1, curri : '자음', video_src : {i}, video_index:{index}} }>
//                 <Button>이 강좌 수강하기</Button> 
//             </Link>
//         </Paper>
//     </>    
//     ))

//     // 모음 영상 리스트
//     const videoArr_mo = video_name_mo.map((i,index)=>(     
//         <>  
//             <Paper>
//                 <video key={i} src={i} width='268' height='164' controls="controls"/>
//                 <h2>{video_title_mo[index][0]}</h2>
//                 <div>{video_title_mo[index][1]}</div>

                
//                 <Button>이 강좌 수강하기</Button> 
                

//             </Paper>
//         </>    
//         ))
    
    
//     // curri 리스트
//     const curriArr= props.curriArr.map((curri,index)=> (
//         <>
//             <Button onClick= {()=> setCurri(curri)}>
//                 <li key={index}>{curri}</li>
//             </Button>           
//         </>          
//     ))

//     return(
//         <div>
//             <h2>{props.title}</h2>            
//             {curriArr}
//             {chooseCurri()}                         
//         </div>
//     );
// }





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


{/* {
                {
                    1: <><Class_menubar level={chapter}/> <Word/></> ,
                    2: <Word level_name={"초급"}/>,
                    3: <Word level_name={"초급"}/>, 
                }[chapter]
            } */}


export default Study_class;