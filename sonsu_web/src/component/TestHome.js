import '../component_css/Test.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import imgcho from './images/cho.png';
import imgjung from './images/jung.png';
import imggo from './images/go.png';


function TestHome() {

        return (
            <>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={2}>
                        <img src={imgcho} width={200} height={200} alt="cho"/> <br/>
                        <h3>초급</h3>
                        <br/> <br/>
                        <Link to={"/test_home/test"}
                            state={{grade : 'cho'}}>
                            <button className="start">시작하기</button>
                        </Link>
                    </Grid>
                    
                    <Grid item xs={2}>
                        <img src={imgjung} width={200} height={200} alt="cho"/> <br/>
                        <h3>중급</h3>
                        <br/> <br/>
                        <Link to={"/test_home/test"}
                            state={{grade : 'jung'}}>
                            <button className="start">시작하기</button>
                        </Link>
                    </Grid>

                    <Grid item xs={2}>
                        <img src={imggo} width={200} height={200} alt="cho"/> <br/>
                        <h3>고급</h3>
                        <br/> <br/>
                        <Link to={"/test_home/test"}
                            state={{grade : 'go'}}>
                            <button className="start">시작하기</button>
                        </Link>
                    </Grid>
                </Grid>
            </>
        );
}

export default TestHome;
