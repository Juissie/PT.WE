// src/components/WorkoutCard.tsx
import React from 'react';
import { Card, Typography, Button } from 'antd';
import './WorkoutCard.css'; // Create this CSS file for additional styling

const { Title, Text } = Typography;

interface WorkoutCardProps {
  workout: {
    ptName: string;
    avatar: string;
    date: string;
    exerciseName: string;
    description: string;
    reps: number;
    sets: number;
  };
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  const handleSkip = () => {
    console.log(`Workout skipped: ${workout.exerciseName}`);
    // Add logic for when the user skips the workout
  };

  const handleDone = () => {
    console.log(`Workout done: ${workout.exerciseName}`);
    // Add logic for when the user marks the workout as done
  };

  return (
    <Card style={{ marginBottom: 16 }}>
      {/* PT's Name */}
      <Title level={4}>{workout.ptName}'s Workout</Title>

      {/* Exercise Details */}
      <Text strong>Exercise Name:</Text> <Text>{workout.exerciseName}</Text>
      <br />
      <Text strong>Description:</Text> <Text>{workout.description}</Text>
      <br />
      <Text strong>Reps:</Text> <Text>{workout.reps}</Text>
      <br />
      <Text strong>Sets:</Text> <Text>{workout.sets}</Text>
      <br />

      {/* Buttons for Skip and Done */}
      <div className="workout-card-buttons">
        <Button type="default" size="large" onClick={handleSkip}>
          Skip
        </Button>
        <Button type="primary" size="large" onClick={handleDone}>
          Done
        </Button>
      </div>
    </Card>
  );
};

export default WorkoutCard;
