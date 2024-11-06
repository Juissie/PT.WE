// src/BottomNavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaChartLine, FaClipboardList, FaDumbbell, FaUser } from 'react-icons/fa';

// Styled component for the entire navbar
const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 1000;
`;

// Styled component for each icon and label
const NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: gray;

  svg {
    font-size: 24px;
    color: gray;
    transition: color 0.3s;
  }

  span {
    margin-top: 5px;
    transition: color 0.3s;
  }

  // Apply blue color to both the icon and text when the link is active
  .active & {
    color: blue;
    svg {
      color: blue;
    }
  }
`;

const BottomNavBar = () => {
  return (
    <NavBar>
      <NavLink to="/log" className={({ isActive }) => (isActive ? 'active' : '')}>
        <NavIcon>
          <FaClipboardList />
          <span>Log</span>
        </NavIcon>
      </NavLink>

      <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
        <NavIcon>
          <FaChartLine />
          <span>Analytics</span>
        </NavIcon>
      </NavLink>

      <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
        <NavIcon>
          <FaHome />
          <span>Home</span>
        </NavIcon>
      </NavLink>

      <NavLink to="/workouts" className={({ isActive }) => (isActive ? 'active' : '')}>
        <NavIcon>
          <FaDumbbell />
          <span>Workouts</span>
        </NavIcon>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
        <NavIcon>
          <FaUser />
          <span>Profile</span>
        </NavIcon>
      </NavLink>
    </NavBar>
  );
};

export default BottomNavBar;
