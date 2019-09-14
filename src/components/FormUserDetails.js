import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import 'typeface-roboto';



class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        style={styles.text}
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <TextField
                        style={styles.text}
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />

                    <TextField
                        style={styles.text}
                        hintText="Enter Your Email ID"
                        floatingLabelText="Email ID"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />

                    <RaisedButton 
                    label="Continue" 
                    primary={true} 
                    style={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default FormUserDetails


const styles = {
    button: {
        margin: 15,
    },
    text: {
        margin: 15,
    }
};