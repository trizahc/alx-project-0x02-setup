// Interface for reusable Card component
export interface CardProps {
  title: string;
  content: string;
}

// Interface for reusable Button component
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}

// Interface for Modal component
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

// Interface for PostCard component and post data
export interface PostProps {
  id: number;
  title: string;
  content: string; // this is the renamed version of "body" from JSONPlaceholder API
  userId: number;
}
