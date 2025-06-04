// interfaces/index.ts
export interface User {
  id: number
  name: string
  email: string
}
export interface CardProps {
  title: string;
  content: string;
}
// interfaces/index.ts
import { ReactNode } from 'react';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: ReactNode;
  onClick?: () => void;
}
