import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='LoginScreen'>
        <div className='login-background'>
            <img className='logo' src='netflix-logo.png' alt=''/>
            <button className='signin-button'>Sign In</button>
            <div className='loginscreen-gradient'/>
        </div>
    </div>
  )
}

export default LoginScreen