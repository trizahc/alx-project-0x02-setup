import React from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body, // map API "body" to our "content"
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
