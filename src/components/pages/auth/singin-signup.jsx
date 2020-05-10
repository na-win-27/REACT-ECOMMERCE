import React from 'react'
import './signin-signup.scss'
import SignIn from '../../sign-in/sign-in'
import Signup from '../../SignUp/sign-up'

const Auth=(props)=>(
    <div className="sign-in-and-sign-up">
    <SignIn/>
    <Signup/>
    </div>
)

export default Auth 