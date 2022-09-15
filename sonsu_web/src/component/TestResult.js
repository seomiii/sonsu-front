import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { PlayTitleDiv,PlayLevel,Logo,PlayVideos,MenuBar,MenuDiv,MenuCurriDiv, MenuCurri,
    PlayWords,PlayWord } from '../component_css/Study_style';

import {TestDiv,TestResultDiv,ResultTitle,Score,Table,Table1,Th,Table2,Table3,Table3th,CurWordHead,HeadWord,HeadWord2,
FollowDiv,FollowBtn
,ShowResultBtn,NextBtn,TestWord,CurWordHeadDiv,CurWord,PlayTestWords,PlayTestWord,NextDiv} from '../component_css/Test_style'
        

const Levelname=['초급','중급','고급'];

function TestResult() {

    const levelIdx=useLocation().state.level;
    var testIdx = useLocation().state.testIdx;

    const [data,setData]=useState();

    useEffect(()=>{
    axios.get(`/test/${testIdx}/result`)
    .then((res)=>{
        setData(res.data.data);
    })
    },[]);

    console.log(data);


    return(
        <>
            <PlayTitleDiv>
                <Link to='/'>
                    <Logo src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>  
                </Link>              
                <PlayLevel>{Levelname[levelIdx-1]}</PlayLevel>
            </PlayTitleDiv>

            <PlayVideos>
                <TestDiv>
                    <TestResultDiv>
                        <ResultTitle> 테스트 결과 </ResultTitle>
                        <Score>{data && data[0].answerCount}/{data && data[0].testCount}</Score>

                        <Table>
                            <thead>
                                <Table1>
                                    {data&& data.map((i)=>{
                                        return <Th>{i.testNo}</Th>
                                    })}
                                </Table1>
                            </thead>

                            <tbody>
                                <Table2>
                                    {data&& data.map((i)=>{
                                            return <Th>{i.wordName}</Th>
                                        })}
                                </Table2>

                                <Table3>
                                    {data&& data.map((i)=>{
                                            if (i.result){

                                                return <Th>O</Th> 
                                            }
                                            else{
                                                return <Table3th>X</Table3th>
                                            }
                                
                                            
                                        })}
                                </Table3>
                            </tbody>
                        </Table>                      
                    </TestResultDiv>
                </TestDiv>

                <MenuBar>
                    <MenuDiv>
                        <CurWordHead>
                            <HeadWord>{data && data[0].testCount}/{data && data[0].testCount}</HeadWord> 
                            <HeadWord2>문제</HeadWord2>
                        </CurWordHead>
                        
                        <CurWordHeadDiv>
                                문제 
                        </CurWordHeadDiv>
                        <CurWord></CurWord>

                        <FollowBtn>촬영 시작하기</FollowBtn>
                        <Link to ='/test_home'>
                            <NextBtn>종료하기</NextBtn>
                        </Link>
                    </MenuDiv>
                </MenuBar>



            </PlayVideos>

        </>
    )
}

export default TestResult;
