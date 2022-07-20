import '../component_css/Study.css';
import React from 'react';
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link } from 'react-router-dom';
import webcam from './WebcamStreamCapture';

// 프론트 고정
const Levelname=['초급','중급','고급'];

// 예상되는 서버에서 오는 데이터
const data={
	level : 1,
	level_name : '초급',	
	curri : '자음',
	words : ['ㄱ (기역)','ㄴ (니은)' ,'ㄷ (디귿)'],
	word_name: 'ㄱ (기역)',
	word_number : 1001,
	word_gesture: 'ㄱ은 손가락을 요렇게 저렇게 해보세요',
	video: 'urlurl'
}

const Cur_menubar= {
	level : 1,
	level_name : '초급',	
	curri : '자음',
	words : ['ㄱ (기역)', 'ㄴ (니은)' ,'ㄷ (디귿)']
}

// 예상되는 서버에서 오는 데이터
// 현재 단어, 단어의 비디오 GET
const Cur_wordVideo={

}

// 예상되는 서버에서 오는 데이터
// 현재 단어, 단어의 수형 GET
const Cur_word={
    word: 'ㄱ (기역)',
	word_gesture : '손가락을 요렇게 저렇게 한번 해보아요~'
}

//-------------------------리소스----------------------------

function Study_play(props){
    const level=useLocation().state.level;
    const word=useLocation().state.word;  
    
    console.log(level,word);    

    return(
        <div> 
            <div>{Levelname[(level-1)]}</div>

            <div>
                <video src="/videos/ㄱ.mp4" width='268' height='164' controls="controls"/> 

                <Link to ="../webcam">
                    <button>따라하기</button>  
                </Link>

                <StudyPlayMenubar></StudyPlayMenubar>
            </div>

            <div>
                <p>{Cur_word.word}</p>
                <p>{Cur_word.word_gesture}</p>
            </div>
            
        </div>
    );
}

function StudyPlayMenubar(props){
    // 나중에 css에서 현재 단어 표시해줘야할텐데,, 걱정
    const word=useLocation().state.word;    

    // 서버에게 get 요청하는 함수 구현해야함.
    const moveOtherWord= () =>{
        // axios.get~
    }

    return(
        <>
            <div>{Cur_menubar.curri}</div>
            {Cur_menubar.words.map(i=>(
                <div onClick={moveOtherWord}>{i}</div>
            ))}

        </>
    );
}






























// function Play_header(props){
//     return(
//         <>
//             <h2>{props.title}</h2>
//         </>
//     );
// }

// function Play_video(props){
//     return(
//         <div>
//             <video src={props.video_src} width='268' height='164' controls="controls"/>
//         </div>
//     );
// }

// function Play_menubar (props) {
//     const cur_list = [
//         {curr : '자음', items : ['ㄱ','ㄴ']},
//         {curr : '모음', items : ['ㅏ']},
//     ]
    
//     // 현재 어떤 커리를 수행중인지
//     const curri_name=props.curri;   
//     // 현재 수행중인 커리에는 무슨 단어들이 있는지
//     const cur_plays=cur_list.filter(function(x){return x.curr==curri_name});    

//     //현재 수강중인 단어
//     console.log(cur_plays[0].items[props.index]);
//     let cur_word = cur_plays[0].items[props.index];
//     //현재 수강중인 커리 단어들
//     console.log(cur_plays[0].items);    
//     let cur_words = cur_plays[0].items;

//     return (
//         <>
//             <ul>
//                 <li>{props.curri}</li>
//                 {/* <li>{cur_words}</li> */}
//                 {cur_words.map((i,index)=>(<li>{i}</li>))}

//                 <Link to={"/webcam"} >
//                     <Button>따라하기</Button>
//                 </Link>
//             </ul>
        
//         </>
//     );
// }


// {/* <Webcam 
//             // 거울모드 적용
//             mirrored={true}
//             /> */}
//             {/* <Paper>팝업입니다.</Paper> */}


// return(
//     <div className='study_play'>  
//         {/* <Play_video video_src={video_src.i}/>
//         {
//             {
//                 1 : 
//                     <>
//                         <Play_header title={"초급"}></Play_header>
//                         <Play_menubar curri={curri} index={video_index.index}/>
//                     </>,
//                 2 : <></>,
//                 3 : <></>,
//             }[chapter]
//         } */}
        
        
        
//     </div>
// );

export default Study_play;