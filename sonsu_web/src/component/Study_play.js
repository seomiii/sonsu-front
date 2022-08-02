import '../component_css/Study.css';
import React,{useState,useEffect} from 'react';
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link} from 'react-router-dom';
import webcam from './WebcamStreamCapture';
import axios from 'axios';
import { 
PlayTitleDiv,
Logo,
PlayLevel,
PlayVideos,
Video,
VideoDiv,
MenuBar,
MenuCurriDiv,
MenuCurri,
PlayWords,
PlayWord,
BackNextDiv,
MenuDiv,
BackNextBtn,
FollowBtn,
FollowDiv,

 } from './../component_css/Study_style';


// 프론트 고정
const Levelname=['초급','중급','고급'];

// 예상되는 서버에서 오는 데이터
const data={	
	curri_name : '자음',	
	word_name: 'ㄱ (기역)',
	word_number : 11001,
	word_gesture: 'ㄱ은 손가락을 요렇게 저렇게 해보세요',
	video: 'urlurl',
    words : { 1 : 'ㄱ (기역)', 2 : 'ㄴ (니은)', 3 : 'ㄷ (디귿)',4:'ㄹ (ㄹㄹ)', 5:'안녕 (hi)', 6: '호호 (아아)'}
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


    //cur_word가 바뀌면 서버에게서 get 해온다.
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
            <PlayTitleDiv>
                <Logo src={`${process.env.PUBLIC_URL}/img/sonsulogo.png`}/>                
                <PlayLevel>{Levelname[(level-1)]}</PlayLevel>
            </PlayTitleDiv>

            <PlayVideos>
                <VideoDiv>
                    <Video src="../../videos/word1.mp4" controls="controls"/> 
                </VideoDiv>
                
                <MenuBar>
                    <MenuDiv>
                        <MenuCurriDiv>
                            <MenuCurri>
                                {data.curri_name}
                            </MenuCurri>                        
                        </MenuCurriDiv>

                        <PlayWords>
                            {words_arr.map(i=>(
                                <PlayWord onClick={()=> setWord(i)}>{i}</PlayWord>
                            ))}
                        </PlayWords>
                    </MenuDiv>      

                    <FollowDiv>
                        <Link to ="../webcam" state={{
                            level : (level),
                            word_name : (word_name),
                            word_id : (word_id)
                            }}>
                            <FollowBtn>따라하기</FollowBtn>  
                        </Link>
                    </FollowDiv>      
            
                    <BackNextDiv>
                        {/* 만약 cur_word가 .. 아무튼 그뭐냐 갯수 초과나 더 이전으로 갈 수 없으면 막아줘야함 */}
                        <BackNextBtn onClick={()=>{setWord(words_arr[(word_loc-1)])}}>◀️ 이전으로</BackNextBtn>
                        <BackNextBtn onClick={()=>{setWord(words_arr[(word_loc+1)])}}>다음으로 ▶️</BackNextBtn>
                    </BackNextDiv>
                    
                

                </MenuBar>
            </PlayVideos>    
                

                
                
            

            <div>
                <p>{data.word_name}</p>
                <p>{data.word_gesture}</p>
            </div>
            
        </div>
    );
}


export default Study_play;