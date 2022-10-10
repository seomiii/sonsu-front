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

    const [data,setData]=useState([]);

    useEffect(()=>{
        // axios.get(`/note/${year}/${month}/${UrlDay}/${level}/1`)
        axios.get(`/note/${year}/9/14/${level}/1`)
        .then((response)=>{
        //  console.log(response.data.data);
         setData(response.data.data);
        })
    }, [])

    console.log(data)

    return (
        <>
            <WrongTitle>오답노트</WrongTitle>

            {Levelname[level-1]}
            <WrongDiv>
                <WrongContent>2022</WrongContent>
                <WrongContent>05/23</WrongContent>
                <WrongContent>1회차 | 2회차 | 3회차</WrongContent>
                <WrongContent>영상</WrongContent>
                <WrongContent>시작하기</WrongContent>
            </WrongDiv>
        </>
    )
}

export default Wrong