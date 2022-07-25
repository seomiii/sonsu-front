import '../component_css/Study.css';
import React,{useState,useEffect} from 'react';
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link} from 'react-router-dom';
import webcam from './WebcamStreamCapture';
import axios from 'axios';

// 프론트 고정
const Levelname=['초급','중급','고급'];

// 예상되는 서버에서 오는 데이터
const data={	
	curri_name : '자음',	
	word_name: 'ㄱ (기역)',
	word_number : 11001,
	word_gesture: 'ㄱ은 손가락을 요렇게 저렇게 해보세요',
	video: 'urlurl',
    words : { 1 : 'ㄱ (기역)', 2 : 'ㄴ (니은)', 3 : 'ㄷ (디귿)'}
}

const words_arr=Object.values(data.words);
const words_id_arr=Object.keys(data.words);



//-------------------------리소스----------------------------

function Study_play(props){
    const level=useLocation().state.level;
    const word_name=useLocation().state.word_name;    
    const word_id=useLocation().state.word_id;     
    
    const word_loc= words_arr.indexOf(word_name);
    // console.log('word_loc', word_loc);

    const [cur_word,setWord]=useState({word_name});

    console.log(cur_word); 


    // cur_word가 바뀌면 서버에게서 get 해온다.
    // useEffect(()=>{
    //     axios.get('study/{level}/{word_id}/{user_id}',{
    //         user_id:'miseomiseo',
    //         level: {level},
    //         word_name : {cur_word},
    //     })
    //     .then((response)=>{
    //      console.log(response);
    //     })

    // }, [cur_word])


    return(
        <div> 
            <div>{Levelname[(level-1)]}</div>

            <div>
                <video src="../../videos/word1.mp4" width='268' height='164' controls="controls"/> 

                <Link to ="../webcam">
                    <button>따라하기</button>  
                </Link>
                
                {/* 만약 cur_word가 .. 아무튼 그뭐냐 갯수 초과나 더 이전으로 갈 수 없으면 막아줘야함 */}
                <button onClick={()=>{setWord(words_arr[(word_loc-1)])}}>이전으로</button>
                <button onClick={()=>{setWord(words_arr[(word_loc+1)])}}>다음으로</button>

                {/* 메뉴바 */}
                <div>{data.curri_name}</div>

                {words_arr.map(i=>(
                    <div onClick={()=> setWord(i)}>{i}</div>
                ))}
                
            </div>

            <div>
                <p>{data.word_name}</p>
                <p>{data.word_gesture}</p>
            </div>
            
        </div>
    );
}

// function StudyPlayMenubar(props){
//     // 나중에 css에서 현재 단어 표시해줘야할텐데,, 걱정
//     const word_name=useLocation().state.word_name;    

//     // 서버에게 get 요청하는 함수 구현해야함.
//     const moveOtherWord= () =>{
//         // axios.get~
//     }

//     return(
//         <>
//             <div>{data.curri_name}</div>
//             {words_arr.map(i=>(
//                 <div onClick={moveOtherWord}>{i}</div>
//             ))}

//         </>
//     );
// }






























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