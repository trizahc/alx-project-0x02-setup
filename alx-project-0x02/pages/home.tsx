import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import { useState } from 'react'

interface Post {
  title: string
  content: string
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost])
    setIsModalOpen(false)
  }

  return (
    <>
      <Header /> {/* ✅ This is what we mean by keeping <Header /> in the return block */}
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  )
}

export default Home
