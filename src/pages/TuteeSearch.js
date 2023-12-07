import React, { useState } from 'react';
import axios from 'axios';

function TuteeSearch() {
    const [searchValue, setSearchValue] = useState('');
    const [subjectValue, setSubjectValue] = useState('');
    const [tuteeList, setTuteeList] = useState([]);

    const onClickHandler = async () => {
        try {
            const response = await axios.get(`/member/find_tutor?memberGender=${searchValue}&tutorUni=${subjectValue}`);
            setTuteeList(response.data.tuteePage.content);
        } catch (error) {
            console.error('Error fetching tutee data:', error);
        }
    };

    return (
        <div>
            <h1 style={{ color: '#9EE5E9' }}>튜티찾기</h1>

            <div>
                <h3>검색어</h3>
                <div className="search-bar">
                    <input
                        type="search"
                        name="menuName"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="검색어를 입력해보세요"
                    />
                </div>
            </div>

            <div>
                <h3>희망과목</h3>
                <div className="search-bar">
                    <input
                        type="search"
                        name="subject"
                        value={subjectValue}
                        onChange={(e) => setSubjectValue(e.target.value)}
                        placeholder="희망과목 입력"
                    />
                </div>
            </div>

            <div className="search-bar">
                <button
                    style={{ color: 'white', backgroundColor: '#9EE5E9' }}
                    onClick={onClickHandler} // 버튼 클릭 시 onClickHandler 함수 호출
                >
                    검색하기
                </button>
            </div>

            <div>
                {/* 튜티 정보를 표시하는 코드 */}
                <ul>
                    {tuteeList.map((tutee) => (
                        <li key={tutee.id}>{tutee.name} - {tutee.subject}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TuteeSearch;
