import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const SignUp = () => {
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

  const onSubmit = (values, { setErrors }) => {
    const errors = {};

    if (!values.id) {
      errors.id = "아이디를 입력하세요";
    } else if (values.id.length < 6 || values.id.length > 20) {
      errors.id = "아이디는 최소 6자 이상이어야 합니다";
    }

    // 나머지 필드에 대한 유효성 검사 추가

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // 회원가입 로직 추가
      console.log("회원가입 성공!", values);
    }
  };

  return (
    <Formik
      initialValues={values}

    >
      <Form>
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
          <label htmlFor="phone">휴대폰 번호 인증</label>
          <div>
            <Field
              type="text"
              name="phone"
              placeholder="휴대폰 번호를 입력 ('-' 제외 11자리 숫자만 입력)"
              required
            />
            <button type="button" id="phone-auth-button">인증번호 요청</button>
          </div>
          <div>
            <Field
              type="text"
              name="authCode"
              placeholder="인증번호 입력"
              required
            />
            <ErrorMessage name="authCode" component="div" className="error-message" />
          </div>
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