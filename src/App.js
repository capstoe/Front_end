import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import TutorSearch from './pages/TutorSearch';
import TuteeSearch from './pages/TuteeSearch';
import FreeBoard from './pages/FreeBoard'; 
import PostForm from './pages/PostForm'; 
import SignUp from './pages/SignUp';
import FindPw from './pages/Findpw'; 
import Findid from './pages/Findid';
import TutorSignUp from './pages/TutorSignUp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="main" element={<Main />} />
                    <Route path="mypage" element={<MyPage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="tutorsearch" element={<TutorSearch />} />
                    <Route path="tuteesearch" element={<TuteeSearch />} />
                    <Route path="freeboard" element={<FreeBoard />} />
                    <Route path="postform" element={<PostForm />} /> 
                    <Route path="signup" element={<SignUp />} />
                    <Route path="findpw" element={<FindPw />} />
                    <Route path="findid" element={<Findid />} />
                    <Route path="create" element={<PostForm />} />
                    <Route path="tutorsignup" element={<TutorSignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;