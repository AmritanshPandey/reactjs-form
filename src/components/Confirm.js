import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
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
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="Last Name"
                        secondaryText={LastName}
                        />
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={email}
                        />
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={firstName}
                        />
                    </List>
                    <RaisedButton 
                    label="Continue" 
                    primary={true} 
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton 
                    label="Back" 
                    primary={false} 
                    style={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Confirm


const styles = {
    button: {
        margin: 15,
    },
    text: {
        margin: 15,
    }
};