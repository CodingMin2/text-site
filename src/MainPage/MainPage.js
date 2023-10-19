import React from 'react';
//컴포넌트 생성할때 사용합니다.

import './Mainpage.css';
//메인 홈페이지 스타일 시트 

import image1 from '../MainPage/notepad-clipart.jpg';

import { useNavigate } from 'react-router-dom';



function MainPage() {
    const gate = useNavigate();

    const navigateToLogin = () => {
        gate('/login');
    };
    const navigateToSignUp = () => {
        gate("/signup");
    }

    const navigateToHome = () => {
        gate("/");
    }
    const navigateToabout = () => {
        gate("/about");
    }
    const navigateToVersion = () => {
        gate("/Version");

    }
    const navigateToMemo = () => {
        gate("/memo");
    }

    return (

        <>
         <div className ="MainPage">
            <div className = "HomeHeader">
                <div className ="HomeLogo">
                   MeMo Site
                </div>
                <div className ="HomeLogin">
                    <button onClick={navigateToLogin}><i class='bx bx-user'></i>로그인</button>
                    <button onClick={navigateToSignUp}><i class='bx bxs-user-plus' ></i>회원가입</button>
                </div>
            </div>

            {/*네비게이션 툴*/}
           
                <div className = "Nav">
                    <span className ="Home1" onClick={navigateToHome}>
                        Home 
                    </span>
                    <span className ="Home2" onClick={navigateToabout}>
                       about
                    </span>
                    <span className ="Home2" onClick={navigateToVersion}>
                       Version
                    </span>
                    <span className ="Home3" onClick={navigateToMemo}>
                       Memo
                    </span>

                </div>

            {/*메인화면 툴*/}

            <div className = "Main">
                <div className = "MainImage">
                    Memo Site Is
                </div>
                <div className = "MainImage2">
                    Welcome To
                </div>
                <div className = "MainButton">
                   <button>Sing in</button>
                </div>
            </div>
            <div className="MemoAbout">
    <div className="AboutItem AboutItem1"> 
        <img src={image1} alt="Description" />
        <p>이곳은 첫 번째 아이템에 대한 설명입니다.</p>
    </div>
    <div className="AboutItem AboutItem2"> 
        <img src={image1} alt="Description" />
        <p>이곳은 두 번째 아이템에 대한 설명입니다.</p>
    </div>
    <div className="AboutItem AboutItem3">
        <img src={image1} alt="Description" />
        <p>이곳은 세 번째 아이템에 대한 설명입니다.</p>
    </div>
</div>



           
        <div className="HomeFooter">
            <p>© 2023 MeMo Site. All rights reserved.</p>
            <p><a href="/terms">이용 약관</a> | <a href="/privacy">개인정보 처리방침</a></p>
        </div>
            
         </div>
        
        </>
    )
}
export default MainPage;