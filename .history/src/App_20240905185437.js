import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, checkLoginStatus, logout } from './features/user/userSlice';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NewPost from './pages/NewPost/NewPost';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Import the protected route

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, loggedIn, user, error } = useSelector((state) => state.user);
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Protect /new-post route */}
        <Route
          path="/new-post"
          element={
            <ProtectedRoute element={<NewPost />} />
          }
        />

        {/* Conditional routes based on login status */}
        {loggedIn ? (
          <Route
            path="/"
            element={
              <div>
                <h3>Welcome {user.firstName}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>
            }
          />
        ) : (
          <>
            <Route
              path="/signin"
              element={
                <SignIn
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  handleSubmit={handleSubmit}
                  error={error}
                />
              }
            />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
