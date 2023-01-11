import React, {useState} from 'react'
import './LoginScreen.css'
import SignupScreen from'./SignupScreen.js'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='LoginScreen'>
        <div className='login-background'>
            <img className='logo' src='netflix-logo.png' alt=''/>
            <button onClick = {() => setSignIn(true)} className='signin-button'>Sign In</button>
            <div className='loginscreen-gradient'/>
            <div className='loginscreen-body'>
              {signIn ? (
                <SignupScreen/>
              ) : (
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='loginscreen-input'>
                  <form>
                    <input type='email' placeholder='Email Address'/>
                    <button onClick = {() => setSignIn(true)} className='getstarted-button'>GET STARTED</button>
                  </form>
                </div>
              </>
              )}
            </div>
        </div>
    </div>
  )
}

export default LoginScreen