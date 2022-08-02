import React,{useCallback, useState} from 'react';
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link } from 'react-router-dom';
import Study_play from './Study_play';
import axios from 'axios';
import { LevelDiv, TitleDiv, CurriDiv, Curri, WordsDiv,WordDiv
, WordThumb, 
WordName,
WordDesDiv,
 WordDes,
 ClassBtn,
 StyledSlider} from './../component_css/Study_style';


//예상되는 서버에서 오는 데이터
//초급 선택시, 자음 선택시 오는 데이터
const Curris=[
    {   
        word_id : 1,
        word_number : 11001, 
        word_name : 'ㄱ (기역)',
        word_info : '한글 자모의 첫째 글자',
        word_thumbnamil : 'urlrul'
    }
    ,
    {
        word_id : 2,
        word_number : 11002, 
        word_name : 'ㄴ (니은)',
        word_info : '한글 자모의 둘째 글자',
        word_thumbnamil : 'urlrul'
    }
    ,
    {
        word_id : 3,
        word_number : 11003, 
        word_name : 'ㄷ (디귿)',
        word_info : '한글 자모의 셋째 글자',
        word_thumbnamil : 'urlrul'
    },

    {
        word_id : 4,
        word_number : 11004, 
        word_name : 'ㄹ (ㄹㄹ)',
        word_info : '한글 자모의 셋째 글자',
        word_thumbnamil : 'urlrul'
    },

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
    },
]

const Images=['../img/word1.png','../img/word2.png','../img/word3.png','../img/word3.png'];


// -----------------------리소스------------------------------------

function Study_class(props){

    const level=useLocation().state.level;

    const level_name=Curri_Arr[(level-1)].level_name;
    const curri_arr=Curri_Arr[(level-1)].curri_arr;

    const [cur_curri,setCurri] = useState(curri_arr[0]);
    console.log(level, cur_curri);   
    
    //서버에게서 데이터 받아오기
    // useEffect(()=>{
    //     axios.get('000/{level}/{cur_curri}',{
    //         level: {level},
    //         curri_name : {cur_curri},
    //     })
    //     .then((response)=>{
    //      console.log(response);
    //     })

    // }, [cur_curri])


    // 슬라이드 구현
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  //한번에 몇개보여줄지
        slidesToScroll: 1, //한번 스크롤시 몇개 넘길지
        arrows: true,
        centerMode: false,
    };


    return(
        <>  
            {/* 수강하기 - 단계선택 - 메뉴바 (ex. 초급 자음|모음) */}
            <TitleDiv>
                <LevelDiv>{level_name}</LevelDiv>

                <CurriDiv>
                {curri_arr.map(i=> (                    
                        <Curri onClick={()=> {setCurri({i})}}>{i}</Curri>                
                )
                )}
                </CurriDiv>

            </TitleDiv>

            {/* 각 영상 하나 섹션별 */}
        
            
            {/* <WordsDiv> */}

                <StyledSlider {...settings}>
                    {Curris.map((obj,index)=>(
                        
                        <WordDiv key={obj.word_id}>
                            
                            <WordThumb alt={obj.word_name} src={Images[index]}/>

                            <WordDesDiv>
                                <WordName>{obj.word_name}</WordName>
                                <WordDes>{obj.word_info}</WordDes>
                            </WordDesDiv>

                            <Link to = "study_play" state={{
                                level : (level), 
                                word_name: (obj.word_name), 
                                word_id: (obj.word_id), 
                                }} >

                                <ClassBtn>강의 수강하기</ClassBtn>
                            </Link>
                            
                        </WordDiv>
                        
                    )
                    )}
                
                </StyledSlider>            
            {/* </WordsDiv>      */}
        
        </>
    );
}


export default Study_class;