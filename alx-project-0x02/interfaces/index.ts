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