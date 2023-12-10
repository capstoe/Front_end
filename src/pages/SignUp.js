import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from 'axios';
import './SignUp.css';
import DaumPostcode from 'react-daum-postcode';

const SignUp = () => {
  useEffect(() => {
    // Daum 우편번호 서비스 스크립트 동적 로드
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.head.appendChild(script);

    // 컴포넌트가 언마운트될 때 스크립트 정리
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [values, setValues] = useState({
    id: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
    email: "",
    birth: "",
    gender: "",
    school: "",
    authCode: "",
    allConsent: false,
    memberEmail: "",
    zipCode: "",
    address1: "",
    address2: "",
    selectedField: "",
  });

  const validationSchema = yup.object().shape({
    id: yup.string().required('아이디를 입력하세요').min(6, '아이디는 최소 6자 이상이어야 합니다').max(20),
    password: yup.string().required('비밀번호를 입력하세요').min(8, '비밀번호는 최소 8자 이상이어야 합니다').max(20).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|{}:"<>?,./;']+)/, "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다."),
    password2: yup.string().required('비밀번호를 다시 입력하세요').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
    name: yup.string().required('이름을 입력하세요'),
    memberEmail: yup.string().email('올바른 이메일 주소를 입력하세요').required('이메일을 입력하세요'),
    zipCode: yup.string().required('우편번호를 입력하세요'),
    address1: yup.string().required('주소를 입력하세요'),
    selectedField: yup.string().required('회원 유형을 선택하세요'),
  });

  useEffect(() => {
    if (values.allConsent) {
      setValues((prevValues) => ({
        ...prevValues,
        allConsentTerms: true,
        allConsentMatching: true,
        allConsentPrivacy: true,
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        allConsentTerms: false,
        allConsentMatching: false,
        allConsentPrivacy: false,
      }));
    }
  }, [values.allConsent]);

  const handleAllConsentChange = (e) => {
    const { checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      allConsent: checked,
    }));
  };

  const handleSubConsentChange = (name, checked) => {
    setValues((prevValues) => ({ ...prevValues, [name]: checked }));
  };

  const onSubmit = async (values, { setErrors }) => {
    try {
      const response = await axios.post('/api/signup', values);

      if (response.status === 200) {
        console.log("회원가입 성공!", response.data);
        // 성공했을 때 처리 (예: 페이지 이동 등)
      } else {
        console.error("회원가입 실패:", response.data);
        setErrors(response.data.errors);
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      setErrors({ general: "회원가입 중 오류가 발생했습니다." });
    }
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <div>
          <label htmlFor="id">아이디</label>
          <Field
            name="id"
            type="text"
            placeholder="6~20자 영문, 숫자만 가능"
            required
          />
          <ErrorMessage name="id" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <Field
            name="password"
            type="password"
            placeholder="8~20자 영문, 숫자, 특수문자 포함"
            required
          />
          <ErrorMessage name="password" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="password2">비밀번호 확인</label>
          <Field
            name="password2"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
          <ErrorMessage name="password2" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <Field
            name="name"
            type="text"
            placeholder="이름을 입력해주세요"
            required
          />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="phone">전화번호</label>
          <Field
            name="phone"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
            required
          />
          <ErrorMessage name="phone" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <Field
            name="email"
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            required
          />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="birth">생년월일</label>
          <Field
            name="birth"
            type="date"
            placeholder="생년월일을 입력해주세요"
            required
          />
          <ErrorMessage name="birth" component="div" className="error-message" />
        </div>
        <div>
          <label>성별</label>
          <div role="group" aria-labelledby="gender-group">
            <label>
              <Field type="radio" name="gender" value="남자" />
              남자
            </label>
            <label>
              <Field type="radio" name="gender" value="여자" />
              여자
            </label>
          </div>
          <ErrorMessage name="gender" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="school">재학 중인 학교</label>
          <Field
            name="school"
            type="text"
            placeholder="학교명을 입력해주세요"
            required
          />
          <ErrorMessage name="school" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="zipCode">우편번호</label>
          <Field
            name="zipCode"
            type="text"
            placeholder="우편번호를 입력해주세요"
            readOnly
          />
          <input type="button" value="검색" className="btn btn-yg" id="searchZipCode" />
          <ErrorMessage name="zipCode" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="address1">주소</label>
          <Field
            name="address1"
            type="text"
            placeholder="주소를 입력해주세요"
            readOnly
          />
          <ErrorMessage name="address1" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="address2">상세주소</label>
          <Field
            name="address2"
            type="text"
            placeholder="상세주소를 입력해주세요"
          />
          <ErrorMessage name="address2" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="selectedField">회원 유형</label>
          <Field
            name="selectedField"
            as="select"
          >
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
          <label>
            <input
              type="checkbox"
              name="allConsent"
              checked={values.allConsent}
              onChange={handleAllConsentChange}
              required
            />
            전체 동의
          </label>
          <div role="group" aria-labelledby="all-consent-group">
            <label>
              <Field
                type="checkbox"
                name="allConsentTerms"
                checked={values.allConsentTerms}
                onChange={() => handleSubConsentChange("allConsentTerms", !values.allConsentTerms)}
                required
              />
              <span>
                (필수) 이용약관 동의
              </span>
            </label>
            <br />
            <label>
              <Field
                type="checkbox"
                name="allConsentMatching"
                checked={values.allConsentMatching}
                onChange={() => handleSubConsentChange("allConsentMatching", !values.allConsentMatching)}
                required
              />
              <span>
                (필수) 튜터링크 매칭 방식 및 규정 동의
              </span>
            </label>
            <br />
            <label>
              <Field
                type="checkbox"
                name="allConsentPrivacy"
                checked={values.allConsentPrivacy}
                onChange={() => handleSubConsentChange("allConsentPrivacy", !values.allConsentPrivacy)}
                required
              />
              <span>
              (필수) 개인정보 취급방침 동의
              </span>
            </label>
          </div>
        </div>
        <button type="submit">가입하기</button>
      </Form>
    </Formik>
  );
};

export default SignUp;
