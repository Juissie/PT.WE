// src/components/Feed.tsx
import React from 'react';
import TopBar from './TopBar';
import { List, Alert } from 'antd';
import PostCard from './PostCard';  // User-posted workouts
import WorkoutCard from './WorkoutCard';  // PT's workout instructions
import './Feed.css';

interface Post {
  id: number;
  user: string;
  avatar: string;
  date: string;
  workoutType: string;
  caloriesBurned: number;
  duration: string;
  description: string;
}

interface WorkoutPost {
  id: number;
  ptName: string;  // Personal Trainer's name
  avatar: string;
  date: string;
  exerciseName: string;
  description: string;
  reps: number;
  sets: number;
}

// Sample user-posted workouts
const samplePosts: Post[] = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    workoutType: 'Running',
    caloriesBurned: 500,
    duration: '1h 30m',
    date: '2024-09-18',
    description: 'Had a great run today in the park! Covered 10km and felt amazing.',
  },
  {
    id: 2,
    user: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    workoutType: 'Yoga',
    caloriesBurned: 300,
    duration: '45m',
    date: '2024-09-17',
    description: 'Relaxing yoga session focusing on breathing and flexibility.',
  },
];

// Sample PT-posted workouts
const sampleWorkouts: WorkoutPost[] = [
  {
    id: 1,
    ptName: 'Alice Johnson (PT)',
    avatar: 'https://i.pravatar.cc/150?img=3',
    date: '2024-09-16',
    exerciseName: 'Push-ups',
    description: 'A basic upper body strength exercise focusing on chest, shoulders, and triceps.',
    reps: 12,
    sets: 3,
  },
  {
    id: 2,
    ptName: 'Bob Brown (PT)',
    avatar: 'https://i.pravatar.cc/150?img=4',
    date: '2024-09-15',
    exerciseName: 'Jumping Jacks',
    description: 'A cardio exercise to get your heart rate up and burn calories.',
    reps: 30,
    sets: 4,
  },
  {
    id: 3,
    ptName: 'Chris Lee (PT)',
    avatar: 'https://i.pravatar.cc/150?img=5',
    date: '2024-09-14',
    exerciseName: 'Squats',
    description: 'A fundamental lower body exercise focusing on quads and glutes.',
    reps: 15,
    sets: 4,
  },
  {
    id: 4,
    ptName: 'Jane White (PT)',
    avatar: 'https://i.pravatar.cc/150?img=6',
    date: '2024-09-13',
    exerciseName: 'Burpees',
    description: 'A full-body cardio and strength exercise.',
    reps: 10,
    sets: 3,
  },
];

const Feed: React.FC = () => {
  return (
    <div className="page-content">
      <TopBar title="Feed" />

      <div className="feed-container">
        {/* Hardcoded Alert */}
        <Alert
          message="You have workouts to be done"
          description="Please check the workout instructions below."
          type="info"
          showIcon
          closable
          style={{ marginBottom: 8, marginTop: 8 }}
        />

        {/* List of Workouts */}
        <h2>Workouts for You</h2>
        <List
          dataSource={sampleWorkouts}
          renderItem={(workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          )}
        />

        {/* List of User Posts */}
        <h2>Posts</h2>
        <List
          dataSource={samplePosts}
          renderItem={(post) => (
            <PostCard key={post.id} post={post} />
          )}
        />
      </div>
    </div>
  );
};

export default Feed;
