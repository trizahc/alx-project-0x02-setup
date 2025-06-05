// pages/users.tsx
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-3 rounded shadow">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;