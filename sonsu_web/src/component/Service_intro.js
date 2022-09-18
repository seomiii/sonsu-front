import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Header from './header';
import { FadeHome, } from '../component_css/Home_style';
import {
    MediaDiv,
    ServiceDiv,
    ServiceContent,
    ServiceEditor,
    EditorTitle,
    EditorDiv,
    MSDiv,
    JYDiv,
    JHDiv,
    MNDiv,
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
                            <EditorDiv>
                                <MSDiv
                                    // onMouseOver={() => setIsListHover(true)}
                                    // onMouseOut={() => setIsListHover(false)}
                                    // onMouseOver={setIsMouseHover(true)}
                                    // onMouseOut={setIsMouseHover(false)}
                                >
                                    {/* <img
                                        // src={isListHover ? 'img/miseo-text.png' : 'img/miseo.png' }
                                        // src={isMouseHover ? 'img/miseo-text.png' : 'img/miseo.png' }
                                        // width="100%"
                                        // height="100%"
                                        src={'img/miseo.png'}
                                        width="200"
                                        height="200"
                                        alt=""
                                    /> */}
                                </MSDiv>
                                <JYDiv>
                                </JYDiv>
                                <JHDiv>
                                </JHDiv>
                                <MNDiv>
                                </MNDiv>
                                <JEDiv>
                                </JEDiv>
                            </EditorDiv>
                        </ServiceEditor>
                    </MediaDiv>
                </ServiceDiv>
            </FadeHome>
        </>
    )
}

export default Service_intro