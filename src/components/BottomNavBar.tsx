import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, BarChartOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import './BottomNavBar.css';

const BottomNavBar: React.FC = () => {
  const location = useLocation();

  // Define the content for the Popover with horizontal layout
  const popoverContent = (
    <div className="popover-content-horizontal">
      <Link to="/post" className="popover-item-horizontal">Post</Link>
      <Link to="/workout" className="popover-item-horizontal">Workout</Link>
    </div>
  );

  // Determine if the "Add" button should be active
  const isAddActive = ['/post', '/workout'].includes(location.pathname);

  return (
    <div className="bottom-nav-bar">
      <Link
        to="/feed"
        className={`nav-item ${location.pathname === '/feed' ? 'active' : ''}`}
      >
        <HomeOutlined />
        <span>Feed</span>
      </Link>
      <Popover
        content={popoverContent}
        trigger="click"
        placement="top"
        overlayClassName="popover-overlay-horizontal"
      >
        <div className={`nav-item add ${isAddActive ? 'active' : ''}`}>
          <PlusCircleOutlined />
          <span>Add</span>
        </div>
      </Popover>
      <Link
        to="/analytics"
        className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}
      >
        <BarChartOutlined />
        <span>Analytics</span>
      </Link>
    </div>
  );
};

export default BottomNavBar;
