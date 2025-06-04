// pages/home.tsx
import { useState } from 'react'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'

const Home = () => {
  const [cards, setCards] = useState([
    { title: 'Welcome to Home', content: 'This is the default card content.' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddCard = (title: string, content: string) => {
    setCards([...cards, { title, content }])
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add New Post
      </button>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  )
}

export default Home