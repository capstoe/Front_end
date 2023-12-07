import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
/*const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("아이디를 입력하세요")
    .min(6, "아이디는 최소 6자 이상이어야 합니다")
    .max(20),
  password: yup
    .string()
    .required("비밀번호를 입력하세요")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
    .max(20, "비밀번호는 최대 20자 이하여야 합니다")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|{}:"<>?,./;']+)/,
      "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다."
    ),
});
*/

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const value = {
      username: username,
      password: password,
    };
    const header = {
      "Content-Type": "application/json",
    };
    window.localStorage.setItem("data3", JSON.stringify(value));
    console.log(value);
    axios
      .post("http://43.200.252.239:53702/api/signin", value, { header })
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("token2", JSON.stringify(response.data));
        if (response.status === 200) {
          // 로그인 성공 시 실행할 코드 작성
          console.log("Login successful:", response.data);
          navigate("/"); // 예시: 로그인 성공 후 리다이렉트
        }
      });
  };
  //Bearer + JWT TOKEN
  const handleLogin = async (values, { setErrors }) => {
    const value = {
      username: "user12",
      password: "1234",
    };
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signin",
        value
      ); // Axios로 POST 요청 보내기
      console.log("window");
      window.sessionStorage.setItem("token", response);
      if (response.status === 200) {
        // 로그인 성공 시 실행할 코드 작성
        console.log("Login successful:", response.data);
        navigate("/"); // 예시: 로그인 성공 후 리다이렉트
      } else {
        // 로그인 실패 시 실행할 코드 작성
        console.error("Login failed:", response.data);
        setErrors(response.data);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className="login-container">
      <h1 className="login-header">로그인</h1>
      <div className="input-container">
        <label htmlFor="username">아이디를 입력하세요</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="ID"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">비밀번호를 입력하세요</label>
        <input
          type="test"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="PW"
        />
      </div>
      <button className="login-button" onClick={login}>
        LOGIN
      </button>
      <div className="login-links">
        <NavLink to="/signup">회원가입하기</NavLink>
        <NavLink to="/findid">아이디찾기</NavLink>
        <NavLink to="/findpw">비밀번호 찾기</NavLink>
      </div>
    </form>
  );
}

export default Login;
