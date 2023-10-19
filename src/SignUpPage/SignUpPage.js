import React, { useState } from 'react';
import './SignUppage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        // 입력 필드 검증
        if (!userInfo.username || !userInfo.email || !userInfo.password || !userInfo.confirmPassword || !userInfo.phone) {
            alert('모든 필드를 입력해 주세요.');
            return;
        }

        if (userInfo.password !== userInfo.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await axios.post('/signup', userInfo);
            if (response.data === 'Signup successful!') {
                // 회원가입 성공 후 로그인 페이지로 이동
                navigate('/login');
            } else {
                // 서버에서 오류 메시지를 받은 경우
                alert(response.data);
            }
        } catch (error) {
            // 요청 중에 오류가 발생한 경우
            alert('회원가입에 실패했습니다. 나중에 다시 시도해주세요.');
        }
    };

    return (
        <div className="SignupMainHome">
            <div className="SignupBox">
                <div className="SignupLogo">MeMo Site Signup</div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="SignupInput">
                    <div className="SignupMain">
                        <i className='bx bx-user i'></i><input type="text" placeholder='Username' name="username" value={userInfo.username} onChange={handleInputChange}></input>
                        <i className='bx bxs-lock-alt i2'></i><input type="email" placeholder='Email' name="email" value={userInfo.email} onChange={handleInputChange}></input>
                        <i className='bx bxs-lock-alt i3'></i><input type="password" placeholder='Password' name="password" value={userInfo.password} onChange={handleInputChange}></input>
                        <i className='bx bxs-envelope i4'></i><input type="password" placeholder='Confirm Password' name="confirmPassword" value={userInfo.confirmPassword} onChange={handleInputChange}></input>
                        <i className='bx bxs-phone i5'></i><input type="text" placeholder='Phone' name="phone" value={userInfo.phone} onChange={handleInputChange}></input>
                        <div className="ButtomSignup">
                            <button onClick={handleSubmit}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;

