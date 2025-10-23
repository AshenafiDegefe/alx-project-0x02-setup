export interface CardProps {
    title: string;
    content: string;
}

export interface PostData {
  id: string; // Used to uniquely identify the post
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: (data: PostData) => void; // Callback to pass data to the parent
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; 
  size?: ButtonSize; 
  shape?: ButtonShape;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: Address;
  // Note: API returns more fields, but we only type the ones we use
}