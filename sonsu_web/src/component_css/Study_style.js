import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webcam from "react-webcam";

export const GlobalStyles=createGlobalStyle`
    ${reset}
    body{
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      }
`
export const MediaDiv=styled.div`
    margin: 0px auto;
    // background-color: lightblue;
    min-height:100vh;
    width: 1026px;
    @media screen and (max-width: 1026px) {
        width: 100%;
    }   
`
// ---------------------study.js-----------------

// 리팩토링 시 크기 작아지면 컴포넌트들 세로로 가게만들기!
export const StudyMediaDiv=styled.div`
    margin: 0px auto;
    // background-color: lightblue;
    min-height:60vh;
    width: 1026px;
    @media screen and (max-width: 350px) {
        width: 100%;
    }   
`

export const Header_Div=styled.div`
    width: 1026px;
    margin: 0px auto;
`

export const ImgDiv=styled.img`
    width: 235px;
    height: 240px;
    object-fit:cover;
    margin-top:40px;
`

export const ImgBox=styled.img`
    width:100%;
    height: 270px;
    object-fit:contain;
    text-align:center;   
    background-color: #F37A1F;
`
export const FullBox=styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:34px;
`
export const LevelBox=styled.div`
    width:322px;
    height:560px; 
    border-radius : 20px;
    background-color: #F9F9F9;
`
export const StudyLevelDiv=styled.div`
    // background-color:beige;
    margin:25px 44px;
    height:133px;
    color:#2E2E2E;
`
export const LevelName=styled.p`
    font-size: 22px;
    font-weight:500;
    line-height:27.54px;
`
export const LevelDisc=styled.p`
    font-size:17px;
    line-height:21.28px;
    padding-top:20px;
    font-weight:400;
    line-height:21.28px;
    // text-indent:5px
`
export const StudyBtn=styled.button`
    border:none;
    background: #FF7A00;
    border-radius: 50px;
    color:white;
    width: 199px;
    height: 47px;
    font-size: 18px;
    font-weight:500;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin-top: 9px;

    transition: 0.4s;
    &:hover{
        color:#FF7A00;
        background-color:white;
        border:1px solid #FF7A00;
    }
`
export const StudyIntro=styled.p`
    // background-color:yellow;
    text-decoration: none; 
    color:#2E2E2E;
    font-size:15px;
    margin-top:30px;
`

// -----------------------study_class.js--------------
export const TitleDiv=styled.div`
    // background-color:skyblue;
    margin-top: 47px;
    margin-bottom: 62px;
`

export const LevelDiv=styled.div`
    //background-color: lightyellow;
    font-size : 32px;
    font-weight: 700;
    line-height:40.06px;
    display: flex;   
    color:#2E2E2E;  
`

export const CurriDiv=styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: row;  
    font-weight: 500;
    line-height:30.05px;
    color:#2E2E2E;
`
export const Curri=styled.button`
    background-color: white;
    color:#2E2E2E;
    font-size: 24px;  
    border:none;  
    margin-right:43px;
    padding-left:15px;
    border-left : 2px solid #FF7A00;    
`

export const StyledSlider = styled(Slider)`
    .slick-list{ //크기조정
    	width: 1026px; 
        height: 610px;     
    }
    .slick-slide > div{
        margin:15px;
    }    

    .slick-next:before{ 
        font-size: 40px;
        line-height: 1;
        opacity: .75;
        color: rgba(255, 122, 0, 0.4);
        -webkit-font-smoothing: antialiased;
    }

    .slick-prev:before{
    	//font-family: 'slick';
        // margin-right:50px;
        font-size: 40px;
        line-height: 1;
        opacity: .75;
        color: rgba(255, 122, 0, 0.4);        
        margin:-45px;
        -webkit-font-smoothing: antialiased;
    }
`
//얘는 양옆 버튼. 커스텀 해줘야 보임

export const WordDiv=styled.div`
    width: 320px;
    height: 524px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.05);
`
export const WordThumb=styled.img`
    width: 265px;
    height: 176px;
    margin: 45px 27px 33px 27px;
`

export const WordDesDiv=styled.div`
    margin:0 34px; //양옆만
    height:140px;
    color: #2E2E2E;
`
export const WordName=styled.div`    
    font-size: 22px;
    text-align:left;
    margin-bottom: 21px;
    font-weight:500;
    line-height:27.54px;
`
export const WordDes=styled.div`    
    font-size:16px;
    text-align:left;
    line-height: 23px;
    font-weight:300;
    line-height:23px;
`

export const ClassBtn=styled.button`
    border:none;
    background: #FF7A00;
    border-radius: 50px;
    color:white;
    width: 199px;
    height: 47px;
    font-size: 18px;
    font-weight:500;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin-top: 37px;

    transition: 0.4s;
    &:hover{
        color:#FF7A00;
        background-color:white;
        border:1px solid #FF7A00;
    }
`

// -------------------------------study_play------------------------------

export const PlayTitleDiv=styled.div`
    width: 100%;
    background-color: #F9F9F9; 
    height:116px;   
    display:flex; 
    color:#2E2E2E;
`

export const Logo=styled.img`
    height:46px;
    width:232px;
    object-fit:cover;  

    margin-top:35px; 
    margin-left:100px;
    // background-color:lightyellow;
    padding-right: 48px;
    border-right:3px solid #D9D9D9;
`

export const PlayLevel=styled.div`
    // background-color: skyblue;
    font-size: 32px;
    font-weight:500;
    margin-top:38px;
    margin-bottom:38px;
    line-height:40.06px;
    margin-left:50px;
`

export const PlayVideos=styled.div`
    margin: 0px auto;
    // background-color:beige;
    // padding-left:137px;
    // padding-right:127px;
    margin-top:47px;
    // min-height:100vh;
    width: 1654px;
    display:flex;
    justify-content: space-between;
    @media screen and (max-width: 1654px) {
        width: 100%;
    }   
`
export const VideoDiv=styled.div`
    width:1115px;
    height:652px;
    margin-top:30px; 
    background-color: lightgrey;   
`
export const Video=styled.video`
    width:1115px;
    height:652px;
    object-fit:cover;
    border-radius: 22px;
    background-color: lightgrey;
`
export const MenuBar=styled.div`
    // background-color: beige;
    width:400px;
`
export const MenuDiv=styled.div`
    //border-bottom: 1px solid #FF7A00;    
`
export const MenuCurriDiv=styled.div`
    background-color:#FF7A00;
    border-radius: 12px;
    height: 108px;     
`
export const MenuCurri=styled.div`
    font-size: 20px;
    color:white;
    text-align:left;
    line-height: 108px;
    margin-left: 35px;
    font-weight:500;
`
export const PlayWords=styled.div`
    color:#2E2E2E;
    background-color: white;  
    height: 248px;
    overflow: auto;
    &::-webkit-scrollbar{
        width:4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #D9D9D9;
    }    
`
export const PlayWord=styled.div`
    font-size: 17px;
    font-weight:400;
    height: 62px;
    line-height:62px;
    text-align:left;
    text-indent: 35px;
    border-bottom: 1px solid #D9D9D9;    
`

export const BackNextDiv=styled.div`
    margin-top:20px;
    width:400px;
    background-color:#4A4A4A;
    display:flex;
    justify-content:space-around;
    height: 60px;
    border-radius: 12px;
    text-align:center;
`

export const BackNextBtn=styled.button`
    color:white;
    font-size:18px; 
    font-weight:400;
    border:none;
    outline:none;
    background-color:rgba( 0, 0, 0, 0.0 );
    line-height:60px;
    margin:0 40px;
`
export const Bar=styled.div`
    border-right:0.8px solid #D9D9D9;
    margin:10.12px 0;
`
export const FollowDiv=styled.div`
    margin-top:135px;
    background-color:#FF7A00;
    border-radius: 12px;
    height:82px;
    line-height:82px;
`
export const FollowBtn=styled.button`
    border:none;
    outline:none;
    background-color:#FF7A00;
    color:white;
    font-size: 20px; 
    font-weight:500;  
`
export const MotionDiv=styled.div`
    color:#2E2E2E;
    width: 1654px;
    margin: 0px auto;
    margin-top:35px;
    // background-color: beige;
    text-align: left;
    @media screen and (max-width: 1654px) {
        width: 100%;
    } 
`
export const MotionTitle=styled.p`
    font-size: 22px;
    font-weight:500;
    display:inline;
    border-bottom:2px solid #FF7A00;
    margin-left:20px;
    padding: 0 5px 7px 5px;
`
export const Motion=styled.p`
    font-size: 17px;
    font-weight:400;
    margin: 30px;
    // background-color:skyblue;
`
// ------------------------------WebcamStreamCapture------------------
export const WebcamDiv=styled.div`
    display:flex;
    justify-content:center;
    // background-color:beige;
    margin:0px auto;
    width: 1654px;
    
    @media screen and (max-width: 1654px) {
        width: 100%;
    }   
`
export const CamDiv=styled.div`
    width:1115px;
    height:652px;
    margin-top:67px; 
    background-color:black;
    border-radius: 22px;

    @media screen and (max-width: 1115px) {
        width: 100%;
    } 
`
export const BtnDiv=styled.div`
    margin:42px auto;
    width: 1654px;
    display:flex;
    justify-content:center;
    //background:skyblue;
        
    @media screen and (max-width: 1654px) {
        width: 100%;
    }   

`
export const StartBtn=styled.button`
    border:none;
    background: #FF7A00;
    border-radius: 12px;
    color:white;
    width: 272px;
    height: 60px;
    font-size: 18px;
    font-weight:500;
    margin:0 30px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`

export const ResultBtn=styled.button`
    border:none;
    width: 272px;
    height: 60px;
    background: white;
    border-radius: 12px;
    border:1px solid #FF7A00;
    font-size: 18px;
    font-weight:500;
    color:#FF7A00;
    margin:0 30px;
`

// ------------------StudyResult.js --------------------------
export const ResultDiv=styled.div`
    background : #F5F5F5;
    min-height:100vh;
`
export const ResultDisplayDiv=styled.div`
    display : flex;
    justify-content : center;

`