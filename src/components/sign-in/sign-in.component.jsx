import React from 'react';

import styles from './sign-in.module.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    state = {
        userName: '' ,
        password: ''
    }


    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({userName: '', password: ''})
    };
    
    handleChange = event => {
        const { name, value } = event.target;
        console.log('change')
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h1>Sign in:</h1>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='userName' 
                        type='text' 
                        value={this.state.userName} 
                        handleChange={this.handleChange}
                        label='User Name'
                        required
                        />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required/>

                    <input type='submit' value='submit' />
                    <input onClick={signInWithGoogle} type='button' value='sign in with google' />
                </form>

            </div>
        );
    };
}

export default SignIn;