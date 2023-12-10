import React, { useState } from "react";
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './TutorSignUp.css';

const validationSchema = Yup.object().shape({
  memberId: Yup.string().required('아이디를 입력하세요'),
  memberPw: Yup.string().required('비밀번호를 입력하세요').min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
  memberNickname: Yup.string().required('닉네임을 입력하세요'),
  memberName: Yup.string().required('이름을 입력하세요'),
  memberPhoneNumber: Yup.string().required('전화번호를 입력하세요'),
  memberEmail: Yup.string().email('올바른 이메일 형식이 아닙니다').required('이메일을 입력하세요'),
  zipCode: Yup.string().required('우편번호를 입력하세요'),
  address1: Yup.string().required('주소를 입력하세요'),
  address2: Yup.string().required('상세주소를 입력하세요'),
  memberGender: Yup.string().required('성별을 선택하세요'),
  memberBirthday: Yup.date().required('생년월일을 입력하세요'),
  selectedField: Yup.string().required('합격 유형을 선택하세요'),
  tutorMiddleSchool: Yup.string().required('중학교를 입력하세요'),
  tutorHighSchool: Yup.string().required('고등학교를 입력하세요'),
  selectedUnivName: Yup.string().required('대학교를 선택하세요'),
  tutorMajor: Yup.string().required('전공을 입력하세요'),
  tutorMajorNum: Yup.number().required('전공 학점을 입력하세요').min(0, '0 이상의 값을 입력하세요'),
});

const TutorSignUp = () => {
  const initialValues = {
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
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('/member/signup_as_tutor', values);
      console.log("회원가입 성공!", response.data);
      // 성공했을 때 처리 (예: 페이지 이동 등)
    } catch (error) {
      console.error("회원가입 오류:", error);
      // 오류 처리
    } finally {
      // 폼 제출 상태를 초기화
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}   
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <div>
          <span>아이디: </span>
          <Field type="text" name="memberId" />
          <ErrorMessage name="memberId" component="div" className="error-message" />
        </div>
        <div>
          <span>비밀번호: </span>
          <Field type="password" name="memberPw" />
          <ErrorMessage name="memberPw" component="div" className="error-message" />
        </div>
        <div>
          <span>닉네임: </span>
          <Field type="text" name="memberNickname" />
          <ErrorMessage name="memberNickname" component="div" className="error-message" />
        </div>
        <div>
          <span>이름: </span>
          <Field type="text" name="memberName" />
          <ErrorMessage name="memberName" component="div" className="error-message" />
        </div>
        <div>
          <span>전화번호: </span>
          <Field type="tel" name="memberPhoneNumber" />
          <ErrorMessage name="memberPhoneNumber" component="div" className="error-message" />
        </div>
        <div>
          <span>이메일: </span>
          <Field type="email" name="memberEmail" />
          <ErrorMessage name="memberEmail" component="div" className="error-message" />
        </div>
        <div>
          <span>우편번호: </span>
          <Field type="text" name="zipCode" />
          {/* 검색 버튼 코드 생략 */}
          <ErrorMessage name="zipCode" component="div" className="error-message" />
        </div>
        <div>
          <span>주소: </span>
          <Field type="text" name="address1" />
          <ErrorMessage name="address1" component="div" className="error-message" />
        </div>
        <div>
          <span>상세주소: </span>
          <Field type="text" name="address2" />
          <ErrorMessage name="address2" component="div" className="error-message" />
        </div>
        <div>
          <span>성별: </span>
          <label><Field type="radio" name="memberGender" value="M" />남성</label>
          <label><Field type="radio" name="memberGender" value="F" />여성</label>
          <ErrorMessage name="memberGender" component="div" className="error-message" />
        </div>
        <div>
          <span>생년월일: </span>
          <Field type="date" name="memberBirthday" pattern="\d{4}-\d{2}-\d{2}" required />
          <ErrorMessage name="memberBirthday" component="div" className="error-message" />
        </div>
        <div>
          <span>합격 유형: </span>
          <Field as="select" name="selectedField">
            <option value="수시-논술">수시-논술</option>
            <option value="수시-학생부종합전형">수시-학생부종합전형</option>
            <option value="수시-교과">수시-교과</option>
            <option value="수시-적성">수시-적성</option>
            <option value="정시">정시</option>
            <option value="정시-실기">정시-실기</option>
          </Field>
          <ErrorMessage name="selectedField" component="div" className="error-message" />
        </div>
        <div>
          <span>중학교: </span>
          <Field type="text" name="tutorMiddleSchool" placeholder="OO중 까지만 입력해주세요" />
          <ErrorMessage name="tutorMiddleSchool" component="div" className="error-message" />
        </div>
        <div>
          <span>고등학교: </span>
          <Field type="text" name="tutorHighSchool" placeholder="OO고 까지만 입력해주세요" />
          <ErrorMessage name="tutorHighSchool" component="div" className="error-message" />
        </div>
        <div>
          <span>대학교: </span>
          <Field as="select" name="selectedUnivName">
            <option value="서울대학교">서울대학교</option>
            <option value="고려대학교(본캠)">고려대학교(본캠)</option>
            <option value="연세대학교(본캠)">연세대학교(본캠)</option>
            <option value="서강대학교">서강대학교</option>
          </Field>
          <ErrorMessage name="selectedUnivName" component="div" className="error-message" />
        </div>
        <div>
          <span>전공: </span>
          <Field type="text" name="tutorMajor" />
          <ErrorMessage name="tutorMajor" component="div" className="error-message" />
        </div>
        <div>
          <span>전공 학점: </span>
          <Field type="number" name="tutorMajorNum" />
          <ErrorMessage name="tutorMajorNum" component="div" className="error-message" />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </Form>
    </Formik>
  );
};

export default TutorSignUp;
