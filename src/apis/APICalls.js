export function signUpUser(userData) {
    const requestURL = "http://localhost:8080/error/signin"; 

    return async function SignUp(_dispatch, _getState) {
        try {
            const response = await fetch(requestURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('회원가입에 실패했습니다.');
            }

            const result = await response.json();
            // 회원가입 성공 시 추가적으로 처리할 부분

        } catch (error) {
            console.error('회원가입 오류:', error.message);
        }
    };
}
