import React,{useState,useEffect} from 'react';
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
    MotionDiv,
    Motion,
    MotionTitle,
    Bar,
} from './../component_css/Study_style';


// 프론트 고정
const Levelname=['초급','중급','고급'];

//-------------------------리소스----------------------------

function Study_play(props){
    const level=useLocation().state.level;
    const word_name=useLocation().state.word_name;    
    const word_idx=useLocation().state.word_idx;    

    // console.log(word_idx,word_name);
    
    //const word_loc= words_arr.indexOf(word_name);
    // console.log('word_loc', word_loc);   

    const [cur_word,setWord]=useState(word_name);
    const [cur_wordIdx, setWordIdx]=useState(word_idx);
    

    const [data,setData]=useState();

    console.log(data);

    //cur_word가 바뀌면 서버에게서 get 해온다.
    useEffect(()=>{
        axios.get(`/study/word/${cur_wordIdx}`)
        .then((response)=>{
         setData(response.data.data);
        })

    }, [cur_wordIdx])

    const word_loc = data && data.wordsDto.findIndex(obj => obj.wordIdx == cur_wordIdx);
    console.log('word_loc', word_loc,data);
    console.log(data && data.wordsDto[word_loc].wordName, cur_wordIdx);

    return(
        <div> 
            <PlayTitleDiv>
                <Link to='/'>
                    <Logo src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>  
                </Link>              
                <PlayLevel>{Levelname[(level-1)]}</PlayLevel>
            </PlayTitleDiv>

            <PlayVideos>
                {/* <VideoDiv> */}
                    {/* <Video src="{data.videoUrl}" controls="controls"/> */}
                    <Video src="../../videos/word1.mp4" controls="controls"/> 
                {/* </VideoDiv> */}
                
                <MenuBar>
                    <MenuDiv>
                        <MenuCurriDiv>
                            <MenuCurri>
                                {data && data.curriName} | {data && data.wordsDto[word_loc].wordName}
                            </MenuCurri>                        
                        </MenuCurriDiv>

                        <PlayWords>
                            {data && data.wordsDto.map(i=>(                                
                                <PlayWord onClick={()=> {setWordIdx(i.wordIdx)}}>{i.wordName}</PlayWord>
                            ))}

                            {/* {words_arr.map(i=>(
                                <PlayWord onClick={()=> setWord(i)}>{i}</PlayWord>
                            ))} */}
                        </PlayWords>
                    </MenuDiv>  

                    <BackNextDiv>
                        {/* 만약 cur_word가 .. 아무튼 그뭐냐 갯수 초과나 더 이전으로 갈 수 없으면 막아줘야함 */}
                        <BackNextBtn onClick={()=>{
                            setWordIdx(data && data.wordsDto[(word_loc-1)].wordIdx);                             
                            }}>이전으로</BackNextBtn>
                        <Bar></Bar>
                        <BackNextBtn onClick={()=>{
                            setWordIdx(data && data.wordsDto[(word_loc+1)].wordIdx);                           
                            }}>다음으로</BackNextBtn>
                    </BackNextDiv>       

                    <FollowDiv>
                        <Link to ="../webcam" state={{
                            level : (level),
                            word_name : (cur_word),
                            word_id : (word_idx)
                            }}>
                            <FollowBtn>따라하기</FollowBtn>  
                        </Link>
                    </FollowDiv>      
            
                                    

                </MenuBar>
            </PlayVideos>                  

            <MotionDiv>
                <MotionTitle>수형 설명</MotionTitle>
                <Motion>{data && data.wordGesture}</Motion>
            </MotionDiv>
            
            
        </div>
    );
}


export default Study_play;