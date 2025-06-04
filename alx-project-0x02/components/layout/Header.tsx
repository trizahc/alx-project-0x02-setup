// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <h1 className="text-xl font-semibold">ALX Project 2</h1>
      <nav className="mt-2 space-x-4">
        <Link href="/">Main</Link>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;