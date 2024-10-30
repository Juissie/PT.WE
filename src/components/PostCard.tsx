import React from 'react';
import { Card, Avatar } from 'antd';
import { FireOutlined, ClockCircleOutlined, TrophyOutlined } from '@ant-design/icons';
import './PostCard.css';

interface Post {
  id: number;
  user: string;
  avatar: string;
  caloriesBurned: number;
  duration: string;
  workoutType: string;
  date: string;
  description: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card className="post-card" hoverable>
      <Card.Meta
        avatar={<Avatar src={post.avatar} />}
        title={post.user}
        description={post.date}
      />
      <div className="post-content">
        <p>{post.description}</p>
        <div className="post-stats">
          <div className="stat-item">
            <FireOutlined style={{ color: '#ff4d4f', fontSize: '20px' }} />
            <span>{post.caloriesBurned} kcal</span>
          </div>
          <div className="stat-item">
            <ClockCircleOutlined style={{ color: '#1890ff', fontSize: '20px' }} />
            <span>{post.duration}</span>
          </div>
          <div className="stat-item">
            <TrophyOutlined style={{ color: '#52c41a', fontSize: '20px' }} />
            <span>{post.workoutType}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
