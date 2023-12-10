import React, { useState } from "react";
<<<<<<< HEAD
import "./TuteeSearch.css";
function TuteeSearch({ searchTerm, setSearchTerm }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [gender, setGender] = useState("");

=======
import './TuteeSearch.css';

function TuteeSearch({ searchTerm, setSearchTerm }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [gender, setGender] = useState("");

>>>>>>> origin/main
  return (
    <form className="TuteeSearchForm" onSubmit={(e) => {
      e.preventDefault();
      setSearchTerm(`keyword=${keyword}&location=${location}&subject=${subject}&gender=${gender}`);
    }}>
      <h1>튜티찾기</h1>
      <input type="text" placeholder="검색어" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <select name="location" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="전체">전체</option>
        <option value="서울">서울</option>
        <option value="경기">경기</option>
        <option value="인천">인천</option>
        <option value="강원">강원</option>
        <option value="충청북도">충청북도</option>
        <option value="충청남도">충청남도</option>
        <option value="전라북도">전라북도</option>
        <option value="전라남도">전라남도</option>
        <option value="경상북도">경상북도</option>
        <option value="경상남도">경상남도</option>
        <option value="제주특별자치도">제주특별자치도</option>
      </select>
      <select name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="전체">전체</option>
        <option value="국어">국어</option>
        <option value="영어">영어</option>
        <option value="수학">수학</option>
        <option value="과학">과학</option>
        <option value="사회">사회</option>
        <option value="예술">예술</option>
        <option value="기타">기타</option>
      </select>
      <select name="school" value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="전체">전체</option>
        <option value="삼육대학교">삼육대학교</option>
        <option value="서울대학교">서울대학교</option>
        <option value="연세대학교">연세대학교</option>
        <option value="고려대학교">고려대학교</option>
        <option value="카이스트">카이스트</option>
        <option value="포항공대">포항공대</option>
        <option value="한양대학교">한양대학교</option> 
        <option value="중앙대학교">중앙대학교</option>
      </select>
      <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="전체">전체</option>
        <option value="남자">남자</option>
        <option value="여자">여자</option>
      </select>
      <button type="submit">검색</button>
    </form>
  );
}

export default TuteeSearch;
