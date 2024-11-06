// src/Dashboard.js
import React from 'react';
import WeightLossChart from './WeightLossChart';
import NextPTSession from './NextPTSession';

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h1>Welcome, John Doe</h1>

      {/* Weight Loss Chart Section */}
      <WeightLossChart />

      {/* Next PT Session Section */}
      <NextPTSession />
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
};

export default Dashboard;
