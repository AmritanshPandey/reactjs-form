import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import ProfileImage from './ProfileImage';
import Confirm from './Confirm';
import Success from './Success';




class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        imagePreviewUrl: null
    };
    

    // Proceed to the Next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go Back to Prev Step
    prevStep = () => {
        const { step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle Fields Change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio, imagePreviewUrl} = this.state;
        const values = { firstName, lastName, email, occupation, city, bio, imagePreviewUrl}
        
        switch(step){
            case 1: 
            return (
                <FormUserDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 2: 
            return (
                <FormPersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 3: 
            return (
                <ProfileImage
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            );
            case 4: 
            return (
                <Confirm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            );
            
            case 5: 
            return (
                <Success />
            )
        }

            
         
    }
}


export default UserForm