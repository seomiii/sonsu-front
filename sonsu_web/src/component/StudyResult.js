import React,{useState} from 'react';
import { useLocation,Link} from 'react-router-dom';

import { 
    PlayTitleDiv,
    Logo,
    PlayLevel,
    ResultDiv,
    ResultDisplayDiv,
    ResultMentDiv,
    ResultMent1,
    ResultMent2,
    NextBtn,
    Q,
    RankDiv,
    Word,
    ResultImg,
    Rank,

} from './../component_css/Study_style';

// 프론트 고정 소스
const Levelname=['초급','중급','고급'];
const LevelWord=[
    'ㄱ(기역)', 'ㄴ(니은)', 'ㄷ(디귿)', 'ㅏ(아)' , 'ㅓ(어)', 'ㅜ(우)', 
    '안녕하세요','괜찮습니다','감사합니다','미안합니다', '좋다', '싫다',
    '사람','생각','학교','친구','마음'
];


const Ment=[
    {
        result: 0,
        ment1: '동작이 정확하지 않아요.',
        ment2 : '다시 해볼까요?'
    },

    {
        result: 1 ,
        ment1: '동작이 정확해요.',
        ment2 : '참 잘했어요!'

    }
]

function StudyResult(){
    const level=useLocation().state.level;
    const word_idx=useLocation().state.word_idx;
    var data=useLocation().state.data;


    var result=data.result;
    var rank_ratio=data.rank;
    var rank_word=data.rank_word;    
    

    console.log(result,rank_ratio,rank_word);

    const rank = [
        {
          wordName : LevelWord[rank_word[0]],
          wordRatio : rank_ratio[0].toFixed(2)
      },
      {
          wordName : LevelWord[rank_word[1]],
          wordRatio : rank_ratio[1].toFixed(2)
      },
      {
          wordName : LevelWord[rank_word[2]],
          wordRatio : rank_ratio[2].toFixed(2)
      },
    ]
      

    var ment1='';
    var ment2='';
    var resultImg='';


    // 틀렸을때
    if ( result == 0 ){
        ment1 = Ment[0].ment1;
        ment2 = Ment[0].ment2;
        resultImg='/img/studyresult0.png';
    }
    else{
        ment1 = Ment[1].ment1;
        ment2 = Ment[1].ment2;
        resultImg='/img/studyresult1.png';
    }

    console.log(result, ment1,ment2);

    const NextWord=()=>{

    }

    const Restart=()=>{

    }

    return(
        <ResultDiv>
            <PlayTitleDiv>
            <Logo src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>                
            <PlayLevel>{Levelname[(level-1)]}</PlayLevel>
            </PlayTitleDiv>

            <ResultDisplayDiv>
                <ResultMentDiv>
                    <ResultMent1>
                        {ment1}
                    </ResultMent1>

                    <ResultMent2>
                        {ment2}
                    </ResultMent2>

                    {result?(
                        <NextBtn onClick={NextWord}>다음 단어로 넘어가기  > </NextBtn>
                    ): (
                        <NextBtn onClick={Restart}>다시 하기  > </NextBtn>
                    )}

                    <Q>
                        방금 한 동작과 유사한 동작이 궁금하신가요?
                    </Q>

                    <RankDiv>
            
                        {rank.map((i,index)=>(
                            <Rank> {index+1}. <Word>{i.wordName}</Word> / {i.wordRatio} % 유사 </Rank>
                        ))
                        }
        
                    </RankDiv>


                </ResultMentDiv>

                <ResultImg src={resultImg}></ResultImg>
            </ResultDisplayDiv>



        </ResultDiv>
    );
}

export default StudyResult;