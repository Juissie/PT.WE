// src/types/Post.ts
export interface Post {
    id: number;
    user: string;
    avatar: string;
    date: string;
    description: string;
  }
  
  export interface WorkoutPost extends Post {
    caloriesBurned: number;
    duration: string;
    workoutType: string;
  }
  