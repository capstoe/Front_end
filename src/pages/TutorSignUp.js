import React, { useState } from "react";
import axios from 'axios';
import './TutorSignUp.css';
import { Formik, Form } from "formik";
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    
  });
  
  const onSubmit = (values, { setSubmitting }) => {
    
  };


const TutorSignUp = () => {
  const [formData, setFormData] = useState({
    memberId: "",
    memberPw: "",
    memberNickname: "",
    memberName: "",
    memberPhoneNumber: "",
    memberEmail: "",
    zipCode: "",
    address1: "",
    address2: "",
    memberGender: "M",
    memberBirthday: "",
    selectedField: "수시-논술",
    tutorMiddleSchool: "",
    tutorHighSchool: "",
    selectedUnivName: "서울대학교",
    tutorMajor: "",
    tutorMajorNum: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/member/signup_as_tutor', formData);
      console.log("회원가입 성공!", response.data);
      // 성공했을 때 처리 (예: 페이지 이동 등)
    } catch (error) {
      console.error("회원가입 오류:", error);
      // 오류 처리
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}   
      onSubmit={onSubmit}
    >
      <Form className="form">
    <div>
      <h1>튜터 가입 페이지</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>아이디: </span>
          <input type="text" name="memberId" id="memberId" onChange={handleChange} />
        </div>
        <div>
          <span>비밀번호: </span>
          <input type="password" name="memberPw" onChange={handleChange} />
        </div>
        <div>
          <span>닉네임: </span>
          <input type="text" name="memberNickname" onChange={handleChange} />
        </div>
        <div>
          <span>이름: </span>
          <input type="text" name="memberName" onChange={handleChange} />
        </div>
        <div>
          <span>전화번호: </span>
          <input type="tel" name="memberPhoneNumber" onChange={handleChange} />
        </div>
        <div>
          <span>이메일: </span>
          <input type="email" name="memberEmail" onChange={handleChange} />
        </div>
        <div>
          <span>우편번호: </span>
          <input type="text" name="zipCode" id="zipCode" readOnly />
          {/* 검색 버튼 코드 생략 */}
        </div>
        <div>
          <span>주소: </span>
          <input type="text" name="address1" id="address1" readOnly />
        </div>
        <div>
          <span>상세주소: </span>
          <input type="text" name="address2" id="address2" onChange={handleChange} />
        </div>
        <div>
          <span>성별: </span>
          <label><input type="radio" name="memberGender" value="M" onChange={handleChange} />남성</label>
          <label><input type="radio" name="memberGender" value="F" onChange={handleChange} />여성</label>
        </div>
        <div>
          <span>생년월일: </span>
          <input type="date" name="memberBirthday" pattern="\d{4}-\d{2}-\d{2}" required onChange={handleChange} />
        </div>
        <div>
          <span>합격 유형: </span>
          <select name="selectedField" value={formData.selectedField} onChange={handleChange}>
            <option value="수시-논술">수시-논술</option>
            <option value="수시-학생부종합전형">수시-학생부종합전형</option>
            <option value="수시-교과">수시-교과</option>
            <option value="수시-적성">수시-적성</option>
            <option value="정시">정시</option>
            <option value="정시-실기">정시-실기</option>
          </select>
        </div>
        <div>
          <span>중학교: </span>
          <input type="text" name="tutorMiddleSchool" placeholder="OO중 까지만 입력해주세요" onChange={handleChange} />
        </div>
        <div>
          <span>고등학교: </span>
          <input type="text" name="tutorHighSchool" placeholder="OO고 까지만 입력해주세요" onChange={handleChange} />
        </div>
        <div>
          <span>대학교: </span>
          <select name="selectedUnivName" value={formData.selectedUnivName} onChange={handleChange}>
            <option value="서울대학교">서울대학교</option>
            <option value="고려대학교(본캠)">고려대학교(본캠)</option>
            <option value="연세대학교(본캠)">연세대학교(본캠)</option>
            <option value="서강대학교">서강대학교</option>
          </select>
        </div>
        <div>
          <span>전공: </span>
          <input type="text" name="tutorMajor" onChange={handleChange} />
        </div>
        <div>
          <span>전공 학점: </span>
          <input type="number" name="tutorMajorNum" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
    </Form>
    </Formik>
  );
};

export default TutorSignUp;
