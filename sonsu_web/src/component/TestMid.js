import React from 'react';
import { Link } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";


class TestMid extends React.Component{

    render(){
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={10} md={10} item style={{ paddingRight: 16 }}>
                        <Link to="/test">
                            <Button 
                                color="primary"
                                variant="contained">
                                자음
                            </Button>
                        </Link>
                    </Grid>


                    <Grid xs={10} md={10} item style={{ paddingRight: 16 }}>
                        <Link to="/test">
                            <Button 
                                color="primary"
                                variant="contained">
                                모음
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default TestMid;
