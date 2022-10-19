import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import React,{useCallback, useState,useEffect} from 'react';
import Header from './header'
import { HeaderDiv } from '../component_css/Home_style';
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv } from '../component_css/Study_style';
import {
    WrongTitle,
    WrongDiv,
    WrongSome,
    WrongText,
    WrongReapeat,
    WrongReapeatContent,
    WrongStartBtn,
    WrongLevelName,
    WrongWordName,
    WrongHeader,
    WrongDate,
    WrongReapeatNumber,
    WrongReapeatTitle,
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
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <MediaDiv>
                <FadeHome>
                    <WrongDiv>
                        <WrongTitle>
                            <img src='img/bar.png' alt="image"/>
                            <WrongText>
                                오답노트
                            </WrongText>
                        </WrongTitle>
                        <WrongHeader>
                            <WrongLevelName>
                                {Levelname[level-1]}
                            </WrongLevelName>
                            <WrongDate>{data && data[0].testDate}</WrongDate>
                        </WrongHeader>
                        {data && data.map((i,index)=>(
                            <>
                                <WrongReapeatTitle>
                                    <img src='img/dot.png' alt="image" margin="10"/>
                                    <WrongReapeatNumber>
                                        {index+1}회차
                                    </WrongReapeatNumber>
                                </WrongReapeatTitle>
                                <WrongReapeat>
                                    {i.wordsDTO.map(j=>(
                                        <WrongReapeatContent>
                                            <WrongSome>
                                                <img src={j.thumbnailUrl} alt="image" height="150" width="220"/>
                                            </WrongSome>
                                            <WrongWordName>{j.wordName}</WrongWordName>
                                            <Link to={"/study/study_class/study_play"}
                                            style={{ textDecoration: 'none' }}
                                            state={{level : (i.levelIdx),
                                                    word_name : (j.wordName),
                                                    word_idx : (j.wordIdx)}}
                                            >
                                                <WrongStartBtn>시작하기</WrongStartBtn>
                                            </Link>
                                        </WrongReapeatContent>
                                    ))}
                                </WrongReapeat>

                            </>
                            

                        ))}                
                        
                    </WrongDiv>
                </FadeHome>
            </MediaDiv>
        </>
    )
}

export default Wrong