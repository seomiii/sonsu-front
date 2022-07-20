import React,{useCallback, useState} from 'react';
import {Button,Paper} from '@material-ui/core'
import { useLocation,Link } from 'react-router-dom';
import Study_play from './Study_play';
import axios from 'axios';

//예상되는 서버에서 오는 데이터
//초급 선택시, 자음 선택시 오는 데이터
const Curris=[
    {
        curri : '자음',
        word_number: 1001,
        word : 'ㄱ (기역)',
        word_info : '한글 자모의 첫째 글자',
        image : 'urlrul'
    }
    ,
    {
        curri : '자음',
        word_number: 1002,
        word : 'ㄴ (니은)',
        word_info : '한글 자모의 둘째 글자',
        image : 'urlrul'
    }
    ,
    {
        curri : '자음',
        word_number: 1003,
        word : 'ㄷ (디귿)',
        word_info : '한글 자모의 셋째 글자',
        image : 'urlrul'
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
// -----------------------리소스------------------------------------

function Study_class(props){

    const level=useLocation().state.level;

    const level_name=Curri_Arr[(level-1)].level_name;
    const curri_arr=Curri_Arr[(level-1)].curri_arr;

    const [cur_curri,setCurri] = useState(curri_arr[0]);
    console.log(level, cur_curri);   
    
    //서버에게서 데이터 받아오기
    // useEffect(()=>{
    //     axios.get('',{
    //         level: {level},
    //         curri: {cur_curri},
    //     })
    //     .then((response)=>{
    //      console.log(response);
    //     })

    // }, [cur_curri])

    return(
        <>  
            {/* 수강하기 - 단계선택 - 메뉴바 (ex. 초급 자음|모음) */}
            <div>
                <h2>{level_name}</h2>

                {curri_arr.map(i=> (
                    <>
                        <Button onClick={()=> {setCurri({i})}}>{i}</Button>                
                    </>
                )
                )}
            </div>

            {/* 각 영상 하나 섹션별 */}

            <div>
                {Curris.map(obj=>(
                    <>
                        <br/>
                        <div>이미지 이미지</div>
                        <div>{obj.word}</div>
                        <div>{obj.word_info}</div>

                        <Link to = "study_play" state={{level : (level), word: (obj.word)}} >
                            <button>강의 수강하기</button>
                        </Link>
                    </>
                )
                )}

            </div>     
        
        </>
    );
}


export default Study_class;