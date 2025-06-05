// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
