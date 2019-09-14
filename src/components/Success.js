import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import 'typeface-roboto';



class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
              return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Succes" />
                    <h1>Thank You for your Submission</h1>
                    <p>You will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Confirm


