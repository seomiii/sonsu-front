import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Header from './header';
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv,} from '../component_css/Study_style';
import {
    ServiceDiv,
    ServiceContent,
    ServiceEditor,
    EditorTitle,
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
    const [isListHover, setIsListHover] = useState(false);
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

                            </EditorTitle>
                            <FrontDiv>
                                <MSDiv
                                    onMouseOver={() => setIsListHover(true)}
                                    onMouseOut={() => setIsListHover(false)}>
                                    <img
                                        src={isListHover ? 'img/miseo.png' : 'img/miseo-text.png' }
                                        width="100%"
                                        height="100%"
                                        alt=""
                                    />
                                </MSDiv>
                                <JYDiv
                                    onMouseOver={() => setIsListHover(true)}
                                    onMouseOut={() => setIsListHover(false)}>
                                    <img
                                        src={isListHover ? 'img/jungyune.png' : 'img/jungyune-text.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </JYDiv>
                            </FrontDiv>
                            <AppDiv>
                                <JHDiv
                                    onMouseOver={() => setIsListHover(true)}
                                    onMouseOut={() => setIsListHover(false)}>
                                    <img
                                        src={isListHover ? 'img/jihyeon.png' : 'img/jihyeon-text.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </JHDiv>
                                </AppDiv>
                                <BackDiv>
                                <MNDiv
                                    onMouseOver={() => setIsListHover(true)}
                                    onMouseOut={() => setIsListHover(false)}>
                                    <img
                                        src={isListHover ? 'img/muni.png' : 'img/muni-text.png'}
                                        alt=""
                                        width="200"
                                        height="200"
                                    />
                                </MNDiv>
                            </BackDiv>
                            <DesignDiv>
                                <JEDiv
                                    onMouseOver={() => setIsListHover(true)}
                                    onMouseOut={() => setIsListHover(false)}>
                                    <img
                                        src={isListHover ? 'img/jieun.png' : 'img/jieun-text.png'}
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