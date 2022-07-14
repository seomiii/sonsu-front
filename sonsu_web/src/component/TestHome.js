import '../component_css/Test.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import imgcho from './images/cho.png';
import imgjung from './images/jung.png';
import imggo from './images/go.png';


class TestHome extends React.Component{

    render(){
        return (
            <div>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={2}>
                        <img src={imgcho} width={200} height={200} alt="cho"/> <br/>
                        <h3>초급</h3>
                        {/* <label>초급에서 배운 수어의 지문자를 테스트 해봅시다.</label> */}
                        <br/> <br/>
                        <Link to={"/test"}
                            state={{grade : 'cho'}}>
                            <button className="start">시작하기</button>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <img src={imgjung} width={200} height={200} alt="cho"/> <br/>
                        <h3>중급</h3>
                        {/* <label>중급에서 배운 일상생활에서 자주 쓰이는 표현들을 테스트 해봅시다.</label> */}
                        <br/> <br/>
                        <Link to={"/test"}
                            state={{grade : 'jung'}}>
                            <button className="start">시작하기</button>
                        </Link>
                    </Grid>

                    <Grid item xs={2}>
                        <img src={imggo} width={200} height={200} alt="cho"/> <br/>
                        <h3>고급</h3>
                        {/* <label>고급에서 배운 다양한 단어들을 테스트 해봅시다.</label> */}
                        <br/> <br/>
                        <Link to={"/test"}
                            state={{grade : 'go'}}>
                            <button className="start">시작하기</button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default TestHome;
