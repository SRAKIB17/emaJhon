import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../fiebase.init';
import './Login.css'
const Login = () => {

    const location = useLocation()
    let from = location.state?.from?.pathname 
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    let [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const login = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)
    }
    [ user, loading] = useSignInWithGoogle(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const sign=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from)
        })
    }
    // [user, loading] = useSignInWithFacebook(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth)
    if(user){
        navigate('/')
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={login}>
                <p>{error?.message}</p>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" onBlur={handleEmailBlur} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" onBlur={handlePasswordBlur} />
                </div>
                <input type="submit" value="Login" />
            </form>
            <h1 className='new'>New to Ema-john? <Link to='/signup' state={{from: location}}>Create New Account</Link> </h1>
            <div className='hr'>
                <div>

                </div>
                <p>
                    Or
                </p>
                <div>

                </div>
            </div>
            <button onClick={()=>sign()}>Login with Google</button>
            <button onClick={()=>signInWithFacebook()}>Login with FaceBook</button>
        </div>
    );
};

export default Login;