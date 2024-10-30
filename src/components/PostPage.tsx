import React from 'react';
import { Form, Input, Select, Button, message, Typography } from 'antd';
import TopBar from './TopBar';
import axios from 'axios';
import './PostPage.css'; // We'll create this CSS file next
import { configConsumerProps } from 'antd/es/config-provider';

const { Option } = Select;
const { Title } = Typography;

const PostPage: React.FC = () => {
  const [form] = Form.useForm();

  // Handle form submission
  const onFinish = async (values: any) => {
    try {
      // const response = await axios.post('http://127.0.0.1:5000/api/posts', values);
      // if (response.status === 201) {
      //   message.success('Post created successfully!');
      //   form.resetFields();
      // }
      console.log(values);
    } catch (error) {
      console.error('Error creating post:', error);
      message.error('Failed to create post. Please try again.');
    }
  };

  // Handle form submission failure
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Please check the form for errors and try again.');
  };

  return (
    <div className="post-page">
      <TopBar title="Create Post" />
      <div className="content-area">
        <Title level={2} className="page-title">Create a New Post</Title>
        <Form
          form={form}
          name="create_post"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="post-form"
        >
          {/* Description Field */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter a description.' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter description of your workout..." />
          </Form.Item>

          {/* Exercise Type Field */}
          <Form.Item
            label="Exercise Type"
            name="exerciseType"
            rules={[{ required: true, message: 'Please select an exercise type.' }]}
          >
            <Select placeholder="Select exercise type">
              <Option value="running">Running</Option>
              <Option value="yoga">Yoga</Option>
              <Option value="weights">Weights</Option>
              <Option value="others">Others</Option>
            </Select>
          </Form.Item>

          {/* Duration Field */}
          <Form.Item
            label="Duration"
            name="duration"
            rules={[
              { required: true, message: 'Please enter the duration.' },
              { pattern: /^\d+h\s?\d{0,2}m?$/, message: 'Please enter duration in format e.g., 1h 30m' },
            ]}
          >
            <Input placeholder="e.g., 1h 30m" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create Post
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PostPage;
