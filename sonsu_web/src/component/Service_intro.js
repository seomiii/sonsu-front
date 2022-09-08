import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Header from './header';
import { FadeHome, } from '../component_css/Home_style';
import { MediaDiv, } from '../component_css/Study_style';
import {
    ServiceDiv,
    ServiceContent,
    ServiceEditor,
    EditorTitle,
    EditorContent,
    FrontDiv,
    MSDiv,
    JYDiv,
    AppDiv,
    JHDiv,
    BackDiv,
    MNDiv,
    DesignDiv,
    JEDiv,
} from './../component_css/Service_style';
import {HeaderDiv} from './../component_css/Home_style';

const Service_intro = () => {
    // const [isListHover, setIsListHover] = useState(false);
    const [isMouseHover, setIsMouseHover] = useState(false);
    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <FadeHome>
                <ServiceDiv>
                    <ServiceContent>
                        <img src='img/serviceIntro.jpg' alt="image" width='100%'/> <br/>
                    </ServiceContent>
                    <MediaDiv>
                        <ServiceEditor>
                            <EditorTitle>
                                제작자 소개
                            </EditorTitle>
                            <EditorContent>
                                웹프론트엔드 개발
                            </EditorContent>
                            <FrontDiv>
                                <MSDiv
                                    // onMouseOver={() => setIsListHover(true)}
                                    // onMouseOut={() => setIsListHover(false)}
                                    onMouseOver={setIsMouseHover(true)}
                                    onMouseOut={setIsMouseHover(false)}
                                >
                                    <img
                                        // src={isListHover ? 'img/miseo-text.png' : 'img/miseo.png' }
                                        src={isMouseHover ? 'img/miseo-text.png' : 'img/miseo.png' }
                                        // width="100%"
                                        // height="100%"
                                        width="200"
                                        height="200"
                                        alt=""
                                    />
                                </MSDiv>
                                <JYDiv
                                    // onMouseOver={() => setIsListHover(true)}
                                    // onMouseOut={() => setIsListHover(false)}
                                    onMouseOver={setIsMouseHover(true)}
                                    onMouseOut={setIsMouseHover(false)}
                                >
                                    <img
                                        // src={isListHover ? 'img/jungyune-text.png' : 'img/jungyune.png'}
                                        src={isMouseHover ? 'img/jungyune-text.png' : 'img/jungyune.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </JYDiv>
                            </FrontDiv>
                            <EditorContent>
                                앱프론트엔드 개발
                            </EditorContent>
                            <AppDiv>
                                <JHDiv
                                    // onMouseOver={() => setIsListHover(true)}
                                    // onMouseOut={() => setIsListHover(false)}
                                    onMouseOver={setIsMouseHover(true)}
                                    onMouseOut={setIsMouseHover(false)}
                                >
                                    <img
                                        // src={isListHover ? 'img/jihyeon-text.png' : 'img/jihyeon.png'}
                                        src={isMouseHover ? 'img/jihyeon-text.png' : 'img/jihyeon.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </JHDiv>
                            </AppDiv>
                            <EditorContent>
                                백엔드/서버 개발
                            </EditorContent>
                            <BackDiv>
                                <MNDiv
                                    // onMouseOver={() => setIsListHover(true)}
                                    // onMouseOut={() => setIsListHover(false)}
                                    onMouseOver={setIsMouseHover(true)}
                                    onMouseOut={setIsMouseHover(false)}
                                >
                                    <img
                                        // src={isListHover ? 'img/muni-text.png' : 'img/muni.png'}
                                        src={isMouseHover ? 'img/muni-text.png' : 'img/muni.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </MNDiv>
                            </BackDiv>
                            <EditorContent>
                                디자인
                            </EditorContent>
                            <DesignDiv>
                                <JEDiv
                                    // onMouseOver={() => setIsListHover(true)}
                                    // onMouseOut={() => setIsListHover(false)}
                                    onMouseOver={setIsMouseHover(true)}
                                    onMouseOut={setIsMouseHover(false)}
                                >
                                    <img
                                        // src={isListHover ? 'img/jieun-text.png' : 'img/jieun.png'}
                                        src={isMouseHover ? 'img/jieun-text.png' : 'img/jieun.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </JEDiv>
                            </DesignDiv>
                        </ServiceEditor>
                    </MediaDiv>
                </ServiceDiv>
            </FadeHome>
        </>
    )
}

export default Service_intro