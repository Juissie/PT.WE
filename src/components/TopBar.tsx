import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import './TopBar.css';

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  return (
    <div className="top-bar">
      <h1>{title}</h1>
      <UserOutlined className="profile-icon" style={{ fontSize: '24px' }} />
    </div>
  );
};

export default TopBar;
