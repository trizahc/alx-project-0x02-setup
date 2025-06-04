// pages/home.tsx
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'

const Home = () => {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <Card title="Welcome to ALX Project 2" content="This is a reusable Card component." />
        <Card title="About this Project" content="We are building with Next.js, TypeScript, and Tailwind CSS." />
        <Card title="Reusable Components" content="Reusable components make development faster and cleaner." />
      </main>
    </>
  )
}

export default Home