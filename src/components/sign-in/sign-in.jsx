import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import {auth,signInwithGoogle} from '../../firebase/firebase.util'

class Signin extends Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
        };
    }


    handleSubmit=async (event)=>{
        event.preventDefault();
        const{email,password}=this.state
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'', password:''})
        }
        catch(error)
        {
            alert(error);
            
        }

        
    }

    hanleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value});


    }

render(){
    return(

        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput name="email" type="text" value={this.state.email} required handleChange={this.hanleChange} label={'E-mail'}/>
        <FormInput name="password" type="password" value={this.state.password} required handleChange={this.hanleChange}  label={'Password'} />
         <div className="btn">
        <CustomButton  type="submit" >SIGN-IN</CustomButton>
        <CustomButton  isGoogleSignIn  onClick={signInwithGoogle} >SIGN-IN WITH GOOGLE</CustomButton>
         </div>
        </form>
        </div>
    )

}
}

export default Signin