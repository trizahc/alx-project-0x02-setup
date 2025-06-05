import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">Post ID: {id} | User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
