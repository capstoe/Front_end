<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import './SignUp.css';



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
  });

  const validationSchema = yup.object().shape({
    id: yup.string().required('아이디를 입력하세요').min(6, '아이디는 최소 6자 이상이어야 합니다').max(20),
    password: yup.string().required('비밀번호를 입력하세요').min(8, '비밀번호는 최소 8자 이상이어야 합니다').max(20).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|{}:"<>?,./;']+)/, "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다."),
    password2: yup.string().required('비밀번호를 다시 입력하세요').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다'),
    name: yup.string().required('이름을 입력하세요')
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
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
=======
import React from 'react';
import SignUpForm from "../forms/SignUpForm";

function SignUp() {
    return (
>>>>>>> main
        <div>
            <h1>회원가입</h1>
            <SignUpForm />
        </div>
    );
}

export default SignUp;
