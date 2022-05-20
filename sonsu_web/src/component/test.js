import React from 'react';
import { Paper, Grid, Button } from "@material-ui/core";


class Test extends React.Component{

    onButtonClick = () => {
        window.open('TestPopup.js',
        'TestPopup', 'width=300, height=300, menubar=no, status=no, toolbar=no'); 
      }

    render(){
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    {/* <Header /> */}
                    <Grid xs={10} md={10} item style={{ paddingRight: 16 }}>
                        <Button 
                            color="secondary"
                            variant="contained"
                            onClick={this.onButtonClick}>
                            초급
                        </Button>
                    </Grid>


                    <Grid xs={10} md={10} item style={{ paddingRight: 16 }}>
                        <Button 
                            color="secondary"
                            variant="contained"
                            onClick={this.onButtonClick}>
                            중급
                        </Button>
                    </Grid>

                    <Grid xs={10} md={10} item style={{ paddingRight: 16 }}>
                        <Button 
                            color="secondary"
                            variant="contained"
                            onClick={this.onButtonClick}>
                            고급
                        </Button>
                    </Grid>
                    {/* <Footer / > */}
                </Grid>
            </Paper>
        );
    }
}

export default Test;