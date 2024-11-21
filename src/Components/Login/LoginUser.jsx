import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyles.scss';

const LoginUser = () => {
    const [signUpData, setSignUpData] = useState({ username: '', email: '', broj: '', password: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({ ...signUpData, [name]: value });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(signUpData));
        alert('Sign up successful! You can now log in.');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const savedUser = JSON.parse(localStorage.getItem('user'));

        if (
            savedUser &&
            savedUser.email === loginData.email &&
            savedUser.password === loginData.password
        ) {
            alert('Login successful!');
            navigate('/createEvent');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className='login-containers'>
            <div className='body'>
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    <div className="signup">
                        <form onSubmit={handleSignUp}>
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="User name"
                                required
                                value={signUpData.username}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={signUpData.email}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="number"
                                name="broj"
                                placeholder="telephone"
                                required
                                value={signUpData.broj}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                value={signUpData.password}
                                onChange={handleSignUpChange}
                            />
                            <button type="submit">Sign up</button>
                        </form>
                    </div>
                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={loginData.email}
                                onChange={handleLoginChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                value={loginData.password}
                                onChange={handleLoginChange}
                            />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;