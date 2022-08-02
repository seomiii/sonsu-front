import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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


