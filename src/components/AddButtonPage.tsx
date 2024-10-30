import React from 'react';
import TopBar from './TopBar';  // Import TopBar

const AddButtonPage: React.FC = () => {
  return (
    <div>
      <TopBar title="+" /> {/* Top Bar for Add page */}
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h2>This is the + (Add) Page</h2>
      </div>
    </div>
  );
};

export default AddButtonPage;
