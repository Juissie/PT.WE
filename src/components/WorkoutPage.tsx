// src/components/WorkoutPage.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Typography, InputNumber, message } from 'antd';
import TopBar from './TopBar';
import WorkoutCard from './WorkoutCard';
import axios from 'axios';
import './WorkoutPage.css';

const { Title } = Typography;
const { TextArea } = Input;

const WorkoutPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [createdWorkout, setCreatedWorkout] = useState<any>(null); // To store workout

  // Handle form submission
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const workoutData = {
        ptName: 'Alice Johnson (PT)', // PT's name hardcoded for now
        exerciseName: values.exerciseName,
        description: values.description,
        reps: values.reps,
        sets: values.sets,
      };

      const response = await axios.post('http://127.0.0.1:5000/api/workouts', workoutData);
      if (response.status === 201) {
        message.success('Workout created successfully!');
        setCreatedWorkout(workoutData); // Store the created workout
        form.resetFields();
      }
    } catch (error) {
      console.error('Error creating workout:', error);
      message.error('Failed to create workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workout-page">
      <TopBar title="Create Workout" />
      <div className="content-area">
        <Title level={2} className="page-title">Create a New Workout</Title>
        <Form
          form={form}
          name="create_workout"
          layout="vertical"
          onFinish={onFinish}
          className="workout-form"
        >
          {/* Exercise Name */}
          <Form.Item
            label="Exercise Name"
            name="exerciseName"
            rules={[{ required: true, message: 'Please enter the exercise name.' }]}
          >
            <Input placeholder="e.g., Push-Up" />
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter a description.' }]}
          >
            <TextArea rows={3} placeholder="e.g., Upper body push exercise" />
          </Form.Item>

          {/* Reps */}
          <Form.Item
            label="Reps"
            name="reps"
            rules={[{ required: true, message: 'Please enter the number of reps.' }]}
          >
            <InputNumber min={1} placeholder="e.g., 12" style={{ width: '100%' }} />
          </Form.Item>

          {/* Sets */}
          <Form.Item
            label="Sets"
            name="sets"
            rules={[{ required: true, message: 'Please enter the number of sets.' }]}
          >
            <InputNumber min={1} placeholder="e.g., 3" style={{ width: '100%' }} />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {loading ? 'Submitting...' : 'Create Workout'}
            </Button>
          </Form.Item>
        </Form>

        {/* Display the created workout */}
        {createdWorkout && <WorkoutCard workout={createdWorkout} />}
      </div>
    </div>
  );
};

export default WorkoutPage;
