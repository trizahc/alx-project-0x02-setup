// pages/posts.tsx

import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await res.json();
      const formattedData = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formattedData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4 mt-4">Posts</h1>
      {posts.map((post, index) => (
        <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
      ))}
    </div>
  );
};

export default PostsPage;
