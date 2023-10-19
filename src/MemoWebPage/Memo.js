import React from 'react';
import './Memo.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Memo() {
  
  //메인 페이지로 이동

  const Pathgate = useNavigate()

  //경로 지정

  const ClickHome = () => {
    Pathgate('/');
    //루트 경로로 이동 - 메인 페이지 설정
  }

  //경로 지정

  const ClickCreateMemo = () => {
    Pathgate('/CreateMemo');
  }

  return (
    <div className="MemoContainer"> {/* 새로운 컨테이너 div를 추가 */}
      <div className="Sidebar"> {/* 사이드바 섹션 */}
        <div className="SidebarItem" onClick ={ClickHome}>Home</div>
        <div className="SidebarItem2">About</div>
        <hr></hr>
        <div className="SidebarItem3" onClick={ClickCreateMemo}>New Create MeMo</div>
        <div className="SidebarItem3">개발자</div>
        <div className="SidebarItem3">요리사</div>
        <div className="SidebarItem3">설계사</div>
        <hr></hr>
        <div className="SidebarItem3">개인 및 설정</div>
       
     


      </div>
      <div className="MemoMain">
        <div className="MemoSearch">
          <input type="text" placeholder='Search Memo Name' />
        </div>
        {/* 다른 컴포넌트나 내용 */}
      </div>
    </div>
  );
}

export default Memo;
