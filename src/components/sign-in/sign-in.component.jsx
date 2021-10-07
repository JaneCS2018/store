import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import '../custom-button/custom-button.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = event=>{
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange=event=>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleWindow=()=>{
        console.log("Helle")
    }


    render(){
       
        
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} />
                   
                    <FormInput name="password" type="password" label="password" value={this.state.password} handleChange={this.handleChange} />
                    
                        <CustomButton type="submit" value="Submit Form" > Sign In</CustomButton>
                        {/* For some reason, CustomButton onClick function not working*/}
                        <button className="custom-button button_google" onClick={signInWithGoogle}>Sign In With Google</button>
                </form>
            </div>
        )
    }
}
export default SignIn;
