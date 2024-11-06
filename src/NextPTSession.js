// src/NextPTSession.js
import React from 'react';

// Helper function to format the date and time
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${date.toLocaleDateString(undefined, options)} at ${time}`;
};

// Next PT Session component
const NextPTSession = () => {
  // Mock data for the next PT session
  const nextSession = {
    theme: 'Push Day',
    musclesWorked: ['Chest', 'Triceps', 'Shoulders'],
    sessionDate: '2024-10-20T14:30:00', // Example date in ISO 8601 format
  };

  return (
    <div style={styles.sessionContainer}>
      <h2 style={styles.sessionHeader}>Next PT Session</h2>
      <p><strong>Theme:</strong> {nextSession.theme}</p>
      <p><strong>Muscles Worked:</strong> {nextSession.musclesWorked.join(', ')}</p>
      <p><strong>Date & Time:</strong> {formatDate(nextSession.sessionDate)}</p>
    </div>
  );
};

const styles = {
  sessionContainer: {
    width: '80%',
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  sessionHeader: {
    marginBottom: '15px',
  },
};

export default NextPTSession;
