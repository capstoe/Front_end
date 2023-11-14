import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  id: yup.string().required().min(6).max(20),
  password: yup.string().required().min(8).max(20).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|{}:"<>?,./;']+)/),
  password2: yup.string().required().oneOf([yup.ref("password")]),
  name: yup.string().required(),
  phone: yup.string().required().matches(/^01[0-9]{8}$/),
  email: yup.string().required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/),
  birth: yup.string().required().min(4).max(6),
  gender: yup.string().required(),
});

const SignUpForm = () => {
  const [values, setValues] = useState({
    id: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
    email: "",
    birth: "",
    gender: "",
  });

  const onSubmit = (values, { setErrors }) => {
    schema.validate(values)
      .then(() => {
        // 유효성 검사 통과 시 실행할 코드 작성
        // ex: 회원가입 API 호출
      })
      .catch((err) => {
        setErrors(err);
      });
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field
          name="id"
          type="text"
          placeholder="6~20자 영문, 숫자만 가능"
          required
        ></Field>
        <Field
          name="password"
          type="password"
          placeholder="8~20자 영문, 숫자, 특수문자 포함"
          required
        ></Field>
        <Field
          name="password2"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          required
        ></Field>
        <Field
          name="name"
          type="text"
          placeholder="이름을 입력해주세요"
          required
        ></Field>
        <Field
          name="phone"
          type="text"
          placeholder="휴대폰 번호를 입력해주세요"
          required
        ></Field>
        <Field
          name="email"
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          required
        ></Field>
         <Field
          name="birth"
          type="date"
          placeholder="생년월일을 입력해주세요"
          required
        ></Field>
        <Field
          name="gender"
          type="radio"
          options={[
            { value: "남자", label: "남자" },
            { value: "여자", label: "여자" },
          ]}
          required
        ></Field>
        <button type="submit">가입하기</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;