import React, { useRef } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './SignupScreen.css'

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message)
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className='signupscreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4>
              <span className='gray'>New to Netflix? </span>
              <span className='link' onClick={register}>Signup now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen 