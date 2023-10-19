import React, { useState } from 'react';
import './CreateMemo.css'; // 스타일 시트

function CreateMemo({ onSave }) {
    // 상태 변수들
    const [textColor, setTextColor] = useState('#000000');
    const [showItemOptions, setShowItemOptions] = useState(false); // 아이템 옵션 표시 여부
    const [showShapeOptions, setShowShapeOptions] = useState(false); // 도형 옵션 표시 여부
    const [shapes, setShape] = useState([]);
    //도형 저장 



    // 텍스트 색상 변경 핸들러
    const handleColorChange = (event) => {
        setTextColor(event.target.value);
    };

    // 아이템 옵션 표시 토글 핸들러
    const toggleItemOptions = () => {
        setShowItemOptions(!showItemOptions);
    };

    // 도형 옵션 표시 토글 핸들러
    const toggleShapeOptions = () => {
        setShowShapeOptions(!showShapeOptions);
    };

    // 버튼 클릭 이벤트 핸들러 : 선택된 도형을 상태에 저장
    const HandleShapeAdd = (newShape) => {
        setShape([...shapes, newShape])
    }

    // 선택된 도형에 따라 다르게 렌더링할 컴포넌트 또는 요소
    const renderShapes = () => {
        // 배열 'shapes'의 각 요소에 대해 적절한 JSX를 반환합니다.
        return shapes.map((shape, index) => {
            switch(shape) {
                case 'circle':
                    return <div key={index} className="shape circle"></div>;
                case 'square':
                    return <div key={index} className="shape square"></div>;
                default:
                    return null;
            }
        });
    };
    const [Itembox2, setItembox2] = useState(false);
    //누르지 않은 상태를 false로 지정 

    const toggleItemOptions2 = () => {
        setItembox2(!Itembox2);
        console.log("아이템 박스2 버튼 누름");
    }

    return (
        <div className="CreateMemoContainer">
            <div className="StyleSidebar">
                <label className="itembox" onClick={toggleItemOptions}>
                    아이템
                </label>
                <hr></hr>
                {showItemOptions && (
                    <>
                        {/* 여기에 아이템 관련 컴포넌트/버튼을 추가할 수 있습니다. */}
                        <input 
                            type="color" 
                            id="color-picker" 
                            value={textColor}
                            onChange={handleColorChange}
                            hidden
                        />
                        <label htmlFor="color-picker" className="color-picker-label">
                            색상 선택
                        </label>
                        <button onClick={toggleShapeOptions} className="CircleButton">
                            도형 선택
                        </button>
                        {showShapeOptions && (
                            <div className="shape-options">
                                <button className="shape-option" onClick={() => HandleShapeAdd('circle')}>
                                    원
                                </button>
                                <button className="shape-option" onClick={() => HandleShapeAdd('square')}>
                                    사각형
                                </button>
                            </div>
                        )}
                        <button onClick={() => console.log('배경색 변경 클릭')} className="CircleButton">
                            글자 폰트 변경
                        </button>
                        <button onClick={() => console.log('배경색 변경 클릭')} className="CircleButton">
                            굵기 변경
                        </button>
                        <button onClick={() => console.log('배경색 변경 클릭')} className="CircleButton">
                            배경색 변경
                        </button>

                        {/* 추가적인 아이템 옵션들을 이곳에 배치할 수 있습니다. */}
                    </>
                )}
                <label className ="itembox" onClick={toggleItemOptions2}>
                     기타 사항
                </label>
                <hr></hr>
                {Itembox2 && (
                        <button onClick={() => console.log('배경색 변경 클릭')} className="CircleButton">
                        글자 폰트 변경
                    </button>
                )}
            </div>
            <div className="MemoEditor">
                <div className="MemoTitle">
                    <div className="title">
                        제목을 작성하는 공간
                    </div>
                    <hr></hr>
                </div>
                <div>
                    {renderShapes()}
                </div>
            </div>
        </div>
    );
}

export default CreateMemo;


