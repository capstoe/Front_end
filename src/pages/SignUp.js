import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { signUpUser } from "../apis/SuAPI"; 

const SignUp = () => {
  const initialValues = {
    id: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
    email: "",
    birth: "",
    gender: "",
  };

  const onSubmit = async (values, { setErrors }) => {
    try {
      await signUpUser(values);
      console.log('회원가입이 되었습니다!');
    } catch (error) {
      console.error('회원가입 중 오류: ', error);
      setErrors({ server: '회원가입에 실패했습니다. 다시 시도해주세요.' });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={yup.object().shape({
        id: yup.string().required('아이디를 입력하세요').min(6, '아이디는 최소 6자 이상이어야 합니다').max(20),
        password: yup.string().required().min(8).max(20).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|{}:"<>?,./;']+)/, "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다."),
        password2: yup.string().required().oneOf([yup.ref("password"), null], '비밀번호가 일치하지 않습니다'),
        name: yup.string().required(),
        phone: yup.string().required().matches(/^01[0-9]{8}$/, '올바른 휴대폰 번호를 입력하세요'),
        email: yup.string().required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/, '올바른 이메일 주소를 입력하세요'),
        birth: yup.string().required().min(4).max(6),
        gender: yup.string().required(),
      })}
    >
      <Form>
        <div>
          <label htmlFor="id">아이디</label>
          <Field
            id="id"
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
            id="password"
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
            id="password2"
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
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요"
            required
            autoComplete="email"
          />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="phone">전화번호</label>
          <Field
            id="phone"
            name="phone"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
            required
            autoComplete="email"
          />
          <ErrorMessage name="phone" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            required
            autoComplete="email"
          />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <div>
          <label htmlFor="birth">생년월일</label>
          <Field
            id="birth"
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
            <label htmlFor="male">
              <Field type="radio" id="male" name="gender" value="남자" />
              남자
            </label>
            <label htmlFor="female">
              <Field type="radio" id="female" name="gender" value="여자" />
              여자
            </label>
          </div>
          <ErrorMessage name="gender" component="div" className="error-message" />
        </div>
        <button type="submit">가입하기</button>
        <ErrorMessage name="server" component="div" className="error-message" />
      </Form>
    </Formik>
  );
};

export default SignUp;