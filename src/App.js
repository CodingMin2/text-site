import React, { useState } from 'react';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import MemoPage from './MemoWebPage/Memo';
import CreateMemo from './MemoWebPage/CreateMemo/CreateMemo';
import About from './MainPage/Nav/About/About';
import Version from './MainPage/Nav/version/version';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  //메모장을 관리하는 상태관리
  const [memos, setMemos] = useState([]);

  //메모장을 추가하는 함수
  const handleSaveMemo = (newMemo) => {
    setMemos([...memos, newMemo]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/memo" element={<MemoPage />} />
        <Route path="/CreateMemo" element={<CreateMemo onSave={handleSaveMemo} />} />
        <Route path="/about" element ={<About/>}/>
        <Route path ="/version" element = {<Version/>}/>
      </Routes>
    </Router>
  );
}

export default App;
