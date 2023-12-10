import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('아이디를 입력하세요'),
  email: yup.string().required('이메일을 입력하세요').email('올바른 이메일 주소를 입력하세요'),
});

function Findpw() {
  const initialValues = {
    username: '',
    email: '',
  };

  const handleFindPw = (values, { setErrors }) => {
    validationSchema.validate(values, { abortEarly: false })
      .then(() => {
        // 유효성 검사 통과 시 실행할 코드 작성
        // 비밀번호 찾기 API 호출 등
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
      onSubmit={handleFindPw}
    >
      <Form>
        <h1>비밀번호 찾기</h1>
        <div>
          <label htmlFor="username">아이디</label>
          <Field type="text" id="username" name="username" placeholder="아이디" />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <Field type="email" id="email" name="email" placeholder="이메일" />
          <ErrorMessage name="email" component="div" />
        </div>
        <button type="submit">찾기</button>
      </Form>
    </Formik>
  );
}

export default Findpw;
