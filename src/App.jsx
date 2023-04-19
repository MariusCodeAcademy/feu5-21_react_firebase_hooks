// import './styles/reset.css';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/layout/Header';
import { Toaster } from 'react-hot-toast';
import PostsPage from './pages/PostsPage';
import SingleListPost from './components/posts/SingleListPost';
import SinglePostPage from './pages/SinglePostPage';

function App() {
  return (
    <div className="">
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postUid" element={<SinglePostPage />} />
      </Routes>
    </div>
  );
}
export default App;
