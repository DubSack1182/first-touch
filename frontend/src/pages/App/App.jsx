import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/authService';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import TouchListPage from '../TouchListPage/TouchListPage';
import TouchForm from '../../components/TouchForm/TouchForm';
import SignUpPage from '../SignUpPage/SignUpPage';
import SignInPage from '../SignInPage/SignInPage';
import * as touchService from '../../services/touchesService'
import CommentForm from '../../components/NewCommentForm/NewCommentForm';

function App() {
  const [user, setUser] = useState(getUser());

  const [touches, setTouches] = useState([]);

  useEffect(() => {
    const fetchAllTouches = async () => {
      const touchesData = await touchService.index();
  
      // Set state:
      setTouches(touchesData);
    };
    if (user) fetchAllTouches();
  }, [user]);

  const navigate = useNavigate();

  const handleAddTouch = async (touchFormData) => {
    const newTouch = await touchService.create(touchFormData);
    setTouches([newTouch, ...touches]);
    navigate('/touches');
  };

  const handleDeleteTouch = async (touchId) => {
    const deletedTouch = await touchService.deleteTouch(touchId);
    setTouches(touches.filter((touch) => touch._id !== deletedTouch._id));
    navigate('/touches');
  };

  const handleUpdateTouch = async (touchId, touchFormData) => {
    const updatedTouch = await touchService.update(touchId, touchFormData);
  
    setTouches(touches.map((touch) => (touchId === touch._id ? updatedTouch : touch)));
  
    navigate(`/touches/${touchId}`);
  };
  return (
    <main id="react-app">
      <NavBar user={user} setUser={setUser} />   
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/touches/" element={<TouchListPage touches={touches} handleDeleteTouch={handleDeleteTouch} />} />
            <Route path="/touches/new" element={<TouchForm handleAddTouch={handleAddTouch} />} />
            <Route path="/touches/:touchId/edit" element={<TouchForm handleUpdateTouch={handleUpdateTouch} />} />
            <Route path="/touches/:touchId/comments/:commentId/edit" element={<CommentForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </section>
    </main>
  );
}

export default App;
