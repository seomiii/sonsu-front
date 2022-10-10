import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import React,{useCallback, useState,useEffect} from 'react';
import {
    WrongTitle,
    WrongDiv,
    WrongContent
} from './../component_css/Wrong_style';

const Levelname=['초급','중급','고급'];

const Wrong = () => {

    const year = useLocation().state.year;
    const month = useLocation().state.month;
    const day = useLocation().state.day;
    const level = useLocation().state.level;
    const UrlDay=(day).slice(8,10);

    const [data,setData]=useState();

    useEffect(()=>{
        axios.get(`/note/${year}/${month}/${UrlDay}/${level}/1`)
        // axios.get(`/note/${year}/9/14/${level}/1`)
        .then((response)=>{
          setData(response.data.data);
        })
    }, [])

    console.log(data)

    return (
        <>
            <WrongTitle>오답노트</WrongTitle>

            {Levelname[level-1]}
            <WrongDiv>
                <WrongContent>{data && data[0].testDate}</WrongContent>

                {data && data.map((i,index)=>(
                    <>
                        <div>
                            {index+1}회차
                        </div>

                        {i.wordsDTO.map(j=>(
                            <div>
                                <div>{j.wordName}</div>
                                <img src={j.thumbnailUrl} alt="image"/>

                                <Link to={"/study/study_class/study_play"}
                                style={{ textDecoration: 'none' }}
                                state={{level : (i.levelIdx),
                                        word_name : (j.wordName),
                                        word_idx : (j.wordIdx)}}
                                >
                                    <button>시작하기</button>
                                </Link>
                            </div>
                        ))}

                    </>
                    

                ))}                
                
            </WrongDiv>
        </>
    )
}

export default Wrong