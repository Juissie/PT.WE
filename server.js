// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/dashboard', (req, res) => {
  res.json({
    clientName: 'John Doe',
    totalWeightLost: 5.2,
    totalSessions: 10,
    workoutStreak: 7,
    coachName: 'Coach Sarah',
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
