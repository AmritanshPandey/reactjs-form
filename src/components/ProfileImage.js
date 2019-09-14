import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import 'typeface-roboto';



class ProfileImage extends Component {
state = {
    selectedFile: null,
    imagePreviewUrl: null
};

fileChangeHandler = event => {
    this.setState({
        selectedFile: event.target.files[0]
    })

    let reader = new FileReader();

    reader.onloadend = () => {
        this.setState({
            imagePreviewUrl: reader.result
        });
    }
    reader.readAsDataURL(event.target.files[0])
}
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        let $imagePreview = (<div className="previewText image-container">Please Select an Image</div>);
        if (this.state.imagePreviewUrl) {
            $imagePreview = (<div className="image-container"><img src={this.state.imagePreviewUrl} alt="img" width="200"/></div>);
        }
        // const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Upload your Profile Image" />
                    <input type="file" name="profile" onChange={this.fileChangeHandler} />
                    <br />
                    <RaisedButton 
                    label="Submit" 
                    secondary={true} 
                    style={styles.button}
                    onClick={this.continue}
                    />
                    { $imagePreview }
                    
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


export default ProfileImage


const styles = {
    button: {
        margin: 15,
    },
    text: {
        margin: 15,
    }
};