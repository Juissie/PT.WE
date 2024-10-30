import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavBar from './components/BottomNavBar';
import Feed from './components/Feed';
import Analytics from './components/Analytics';
import PostPage from './components/PostPage';       // New component
import WorkoutPage from './components/WorkoutPage'; // New component

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/" element={<Feed />} />
        </Routes>
        <BottomNavBar />
      </div>
    </Router>
  );
};

export default App;
