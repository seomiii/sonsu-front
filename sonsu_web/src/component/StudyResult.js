import React,{useState} from 'react';
import { useLocation,Link} from 'react-router-dom';

import { 
    PlayTitleDiv,
    Logo,
    PlayLevel,
    ResultDiv,
    ResultDisplayDiv

} from './../component_css/Study_style';

// 프론트 고정 소스
const Levelname=['초급','중급','고급'];

const Ment=[
    {
        result: 0,
        ment1: '동작이 정확하지 않아요.',
        ment2 : '다시 해볼까요?'
    },

    {
        result: 1 ,
        ment1: '동작이 정확해요',
        ment2 : '참 잘했어요!'

    }
]

// flask 예상 데이터
const Data=[
    {
        result: 1 ,

        rank : [
            {
                wordName : 'ㄱ(기역)',
                wordRatio : 30
            },
            {
                wordName : 'ㄴ(니은)',
                wordRatio : 10
            },
            {
                wordName : 'ㄷ(디귿)',
                wordRatio : 5
            },
        ]
    }
]

function StudyResult(){
    const level=useLocation().state.level;
    const word_idx=useLocation().state.word_idx;
    var Rresult=useLocation().state.result;

    const [flaskResult,setFlaskResult]=useState(Data[0].result);
    const [ResultMent1, setResultMent1]=useState(Ment[0].ment1);
    const [ResultMent2, setResultMent2]=useState(Ment[0].ment2);

    console.log(flaskResult,ResultMent1,ResultMent2);

    // axios.get(`model/study`)
    // .then((response)=>{
    //     console.log(response);
    // })


    return(
        <ResultDiv>
            <PlayTitleDiv>
            <Logo src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>                
            <PlayLevel>{Levelname[(level-1)]}</PlayLevel>
            </PlayTitleDiv>

            <ResultDisplayDiv>

            </ResultDisplayDiv>



        </ResultDiv>
    );
}

export default StudyResult;