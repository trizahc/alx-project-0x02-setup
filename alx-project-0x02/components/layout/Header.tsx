import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">ALX Project 2</h1>
        <nav className="flex gap-6">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
