// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';
import Dashboard from './Dashboard';

const Log = () => <h1>Log Page</h1>;
const Analytics = () => <h1>Analytics Page</h1>;
const Workouts = () => <h1>Workouts Page</h1>;
const Profile = () => <h1>Profile Page</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/log" element={<Log />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomNavBar />
    </Router>
  );
};

export default App;
