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
    width: 1024px;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }   
`
export const TitleDiv=styled.div`
    //background-color:skyblue;
    margin-top: 37px;
    margin-bottom: 37px;
`

export const LevelDiv=styled.div`
    //background-color: lightyellow;
    font-size : 32px;
    display: flex;     
  
`

export const CurriDiv=styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;  
`
export const Curri=styled.button`
    background-color: white;
    font-size: 24px;  
    border:none;  
    border-left : 1px solid #FF7A00;  
    margin-right: 50px;   
`

// export const WordsDiv=styled.div`
//     background-color: beige;
//     display: flex;
//     flex-direction: row;  

//     //overflow:hidden;
//     //display: inline-block;
// `

export const StyledSlider = styled(Slider)`

    .slick-list{ //크기조정
    	width: 1024px; 
        height: 520px;
        //margin: 0 auto;
        //background-color: #f0f9ff;
        
    }

    .slick-slide{
        margin:0 15px;
    }    

    .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
    	//font-family: 'slick';
        font-size: 40px;
        line-height: 1;
        opacity: .75;
        color: #D9D9D9;
        -webkit-font-smoothing: antialiased;
    }
`

export const WordDiv=styled.div`
    width: 320px;
    height: 432px;
    background-color: white;
    border-radius: 25px;
    margin: 40px 20px 40px 20px;
    border: 1px solid #D9D9D9;
`
export const WordThumb=styled.img`
    width: 290px;
    height: 164px;
    margin: 25px;
`

export const WordDesDiv=styled.div`
    margin:0 25px; //양옆만

`
export const WordName=styled.div`
    
    font-size: 24px;
    text-align:left;
    margin-bottom: 24px;
`
export const WordDes=styled.div`    
    font-size:20px;
    text-align:left;
`

export const ClassBtn=styled.button`
    border:none;
    background: #FF7A00;
    border-radius: 24px;
    color:white;
    width: 167px;
    height: 35px;
    font-size: 16px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    margin-top: 57px;
`

// -------------------------------study_play------------------------------

export const PlayTitleDiv=styled.div`
    width: 100%;
    background-color: #F9F9F9; 
    height:100px;   
    display:flex; 
    border-bottom: 0.8px solid #F47A20; 
`

export const Logo=styled.img`
    height:50px;
    margin-top:25px; 
    margin-left:50px;
    //background-color:lightyellow;
    padding-right: 40px;
    border-right:1px solid #B5B5B5;
`

export const PlayLevel=styled.div`
    //background-color: blue;
    font-size: 32px;
    margin-top:25px;
    margin-bottom:25px;
    line-height:50px;
    margin-left:40px;
`

export const PlayVideos=styled.div`
    margin: 0px auto;
    //background-color: lightblue;
    //min-height:100vh;
    width: 1340px;
    display:flex;
    @media screen and (max-width: 1340px) {
        width: 100%;
    }   
`
export const VideoDiv=styled.div`
    width:982px;
    height:553px;
    margin-top:30px; 
    //background-color: lightgrey;   
`
export const Video=styled.video`
    width:982px;
    height:553px;
    border-radius: 21px;
    margin:0;
`
export const MenuBar=styled.div`
    //background-color: beige;
    margin-left:30px;
    width:329px;
`
export const MenuDiv=styled.div`
    border-bottom: 1px solid #FF7A00;    
`
export const MenuCurriDiv=styled.div`
    background-color:#FF7A00;
    border-radius: 12px;
    height: 108px; 
    margin-top:30px; 
    
`
export const MenuCurri=styled.div`
    font-size: 20px;
    color:white;
    text-align:left;
    line-height: 108px;
    margin-left: 30px;
`
export const PlayWords=styled.div`
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
    font-size: 16px;
    height: 62px;
    line-height:62px;
    text-align:left;
    text-indent: 23px;
    border-bottom: 1px solid #D9D9D9;    
`

export const BackNextDiv=styled.div`
    margin-top:30px;
    width:329px;
    background-color:rgba( 0, 0, 0, 0.7 );
    height: 83px;
    border-radius: 12px;
    text-align:center;
`

export const BackNextBtn=styled.button`
    color:white;
    font-size:16px; 
    border:none;
    outline:none;
    background-color:rgba( 0, 0, 0, 0.0 );
    margin:30px 5px 30px 5px;
`
export const FollowDiv=styled.div`
    margin-top:20px;
    //background-color: skyblue;
    background-color:#FF7A00;
    border-radius: 12px;
    height:60px;
    line-height:60px;
`

export const FollowBtn=styled.button`
    border:none;
    outline:none;
    background-color:#FF7A00;
    color:white;
    font-size: 16px;   
`
export const MotionDiv=styled.div`
    width: 1340px;
    margin: 0px auto;
    // background-color: beige;
    text-align: left;
`
export const MotionTitle=styled.p`
    font-size: 20px;
    margin: 20px;
    border-left:2px solid #FF7A00;
    padding-left: 20px;
`
export const Motion=styled.p`
    font-size: 16px;
    margin: 20px;
    padding-left: 20px;
`
// ------------------------------WebcamStreamCapture------------------
export const CamDiv=styled.div`
    width:982px;
    height:553px;
    margin-top:30px; 
    background-color:black; 
    border-radius: 21px;
`
