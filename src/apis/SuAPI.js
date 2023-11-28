import axios from 'axios';

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080', userData);
    // dispatch하고 값이 넘어간 것을 확인.
    console.log(response.data);
    return response.data; // 서버에서 받은 응답 데이터를 반환   null 값이 나온다.
  } catch (error) {
    console.error('회원가입 중 오류 발생!: ', error);
    throw error; 
  }
};
