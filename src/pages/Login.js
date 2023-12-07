import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
  username: yup.string().required('아이디를 입력하세요').min(6, '아이디는 최소 6자 이상이어야 합니다').max(20),
  password: yup.string().required('비밀번호를 입력하세요').min(8, '비밀번호는 최소 8자 이상이어야 합니다' ).max(20, '비밀번호는 최대 20자 이하여야 합니다').matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|{}:"<>?,./;']+)/, "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다."),
});

function Login() {
    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
    };

    const handleLogin = (values, { setErrors }) => {
        validationSchema.validate(values, { abortEarly: false })
            .then(() => {
                // 유효성 검사 통과 시 실행할 코드 작성
                // 로그인 API 호출 등
            })
            .catch((err) => {
                const errors = {};
                err.inner.forEach((e) => {
                    errors[e.path] = e.message;
                });
                setErrors(errors);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            <Form className="login-container">
                <h1 className="login-header">로그인</h1>
                <div className="input-container">
                    <label htmlFor="username">아이디를 입력하세요</label>
                    <Field type="text" id="username" name="username" placeholder="아이디" />
                    <ErrorMessage name="username" component="div" className="error-message" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">비밀번호를 입력하세요</label>
                    <Field type="password" id="password" name="password" placeholder="비밀번호" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                </div>
                <button className="login-button" type="submit">LOGIN</button>
                <div className="login-links">
                    <NavLink to="/signup">회원가입하기</NavLink>
                    <NavLink to="/findid">아이디찾기</NavLink>
                    <NavLink to="/findpw">비밀번호 찾기</NavLink>
                </div>
            </Form>
        </Formik>
    );
}

export default Login;