import React, { useRef, useState } from 'react';
import { useGlobalContext } from '../context/GlobalStateContext';
import { Link, useNavigate } from 'react-router-dom';
import "../"

export default function Login() {

    const [err,setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const { login } = useGlobalContext();
    const navigate = useNavigate();

    async function handleSubmit(e){

        e.preventDefault();

        setLoading(true);
        setErr('');
        
        try{
            console.log(await login(emailRef.current.value,passwordRef.current.value));
            setSuccess('Logged in');
            navigate("/");
            console.log(success);
        } catch {
            setSuccess('');
            setErr("Failed to Login");
            console.log(err);
        }

        setLoading(false);
    }


    const emailRef = useRef('');
    const passwordRef = useRef('');

  return (
    
    <div className='login d-flex-col'>
      
        <div className='d-flex-col'>
            <h2 className='mb-4 text-center'>Login</h2>
            <form onSubmit={handleSubmit} className='d-flex-col'>
                {err && <div className='error'>{err}</div>}
                {success && <div className='success'>{success}</div>}
                <input type="email" id="email" required ref={emailRef} placeholder='Email'/>
                <input type="password" id="password" required ref={passwordRef} placeholder='Password'/>
                <button disabled={loading} type="submit">Log In</button>
            </form>
        </div>
  
 
    </div>
  )
}
