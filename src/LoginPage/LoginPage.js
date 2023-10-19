import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    // This function will handle the form submission.
    const handleLogin = async () => {
        // Checking if the inputs are empty.
        if (!loginInfo.username || !loginInfo.password) {
            alert('모든 필드를 입력해주세요!');
            return;
        }

        // Proceed with the form submission process.
        try {
            const response = await axios.post('/login', loginInfo);
            if (response.data === 'Login successful!') {
                navigate('/');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            alert('There was a problem with the login request.');
        }
    };

    const onSignup = () => {
        navigate("/signup");
    };

    return (
        <>
            <div className="LoginMainHome">
                <div className="LoginBox">
                    <div className="LoginLogo">
                        MeMo Site Login
                    </div>
                    <div className="LoginInput">
                        <div className="LoginMain">
                            <i class='bx bx-book-content s'></i>
                            <input 
                                type="text" 
                                placeholder='UserName' 
                                onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
                                value={loginInfo.username} 
                            />
                            <input 
                                type="password" 
                                placeholder='Password' 
                                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                                value={loginInfo.password} 
                            />
                            <i class='bx bxs-user-circle LoginIcon'></i>
                            <i class='bx bx-lock PasswordIcon'></i>
                            <div className="ButtomLogin">
                                <button onClick={handleLogin}>
                                    Login 
                                </button>
                                <button onClick={onSignup}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
