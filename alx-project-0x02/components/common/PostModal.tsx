// components/common/PostModal.tsx
import React, { useState, useCallback, FormEvent } from 'react';
import { PostData} from '@/interfaces';
import { PostModalProps } from '@/interfaces';


const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost: PostData = {
      // Use a simple timestamp for a unique ID
      id: Date.now().toString(), 
      title,
      content,
    };

    onPost(newPost); // Pass the data back to the parent
    
    // Reset form and close modal
    setTitle('');
    setContent('');
    onClose(); 
  }, [title, content, onPost, onClose]);

  if (!isOpen) {
    return null;
  }

  // Basic inline styles for a quick modal UI
  const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    minWidth: '400px',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="post-title" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Title:</label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="post-content" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Content:</label>
            <textarea
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={5}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', resize: 'vertical' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 15px', marginRight: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Post
          </button>
          <button type="button" onClick={onClose} style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default PostModal;