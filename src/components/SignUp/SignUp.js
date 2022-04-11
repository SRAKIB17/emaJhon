import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './SignUp.css'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../fiebase.init';

const SignUp = () => {
    const nav = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.state?.from?.pathname || "/";
    
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmBlur = (event) => {
        setConfirm(event.target.value);
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        err,
      ] = useCreateUserWithEmailAndPassword(auth);
    
    const handleCreateUser = (event)=>{
        event.preventDefault()
        if(password !== confirm){
            setError('Password not match')
            return
        }
        else if (password.length <6 || confirm.length < 6){
            setError('password minimum length 6')
            return
        }
        else{
            setError('')
        }
        createUserWithEmailAndPassword(email,password)
        .then(()=>{
            
            nav(from)
        })
    }
 
    if(loading){
        return <div style={{margin:'0 auto'}}>
            <i class="fa fa-spinner fa-spin" style={{fontSize:'300px'}}></i>

        </div>
    }
    
    return (
        <div className='form-container'>
            <h1 className='form-title'>Signup</h1>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" onBlur={handleEmailBlur} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" onBlur={handlePasswordBlur} />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label><p style={{color:'red'}}>{error}</p>
                    <input type="password" name="" id="confirmPassword" onBlur={handleConfirmBlur} />
                </div>
                <input type="submit" value="Sign up" />
            </form>
            <h1 className='new'>Already have an account? <Link to='/login'>Login</Link> </h1>
            
        </div>
    );
};

export default SignUp;


