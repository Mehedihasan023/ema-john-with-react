/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../providers/AuthProvider';
const Login = () => {
    const [show,setShow] = useState(false);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    /* during login if user don't have any previous location state then send them to home or send them to previous location*/
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
       
        signIn(email,password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from,{ replace:true })
            })
            .catch(error => {
                console.log(error);

            })

    } 

    return (
        <div className='form-container'>
            <h2 className='from-title'> Login</h2>

         <form onSubmit={handleLogin}>
            <div className='form-control'>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Password</label>
                <input type={show? "text" : "password"} name="password" id="" required/>
                <p onClick={()=> setShow(!show)}>
                {
                    show? <span>Hide Password</span> : <span>Show Password</span>
                }
                    <small></small>
                </p>
            </div>
            <input className='btn-submit' type="submit" value="Login" />
         </form>
            <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link></small></p>
        </div>
    );
};

export default Login;