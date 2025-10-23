// pages/home.tsx or App.tsx (representing the /home page)
import React, { useState, useCallback } from 'react';
import PostModal from '@/components/common/PostModal';

type PostData = {
  id: string;
  title: string;
  content: string;
};

// A simple component to display a post (optional, for better structure)
const PostDisplay: React.FC<{ post: PostData }> = ({ post }) => (
  <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', borderRadius: '4px' }}>
    <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{post.title}</h3>
    <p style={{ margin: 0, color: '#555' }}>{post.content}</p>
    <small style={{ color: '#aaa' }}>ID: {post.id}</small>
  </div>
);

const HomePage: React.FC = () => {
  // State to hold all the posts
  const [posts, setPosts] = useState<PostData[]>([]);
  // State to control the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to add a new post (passed to the modal)
  const handleNewPost = useCallback((newPost: PostData) => {
    // Add the new post to the beginning of the array
    setPosts(currentPosts => [newPost, ...currentPosts]); 
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Home Feed</h1>
      
      {/* Button to open the modal */}
      <button 
        onClick={() => setIsModalOpen(true)} 
        style={{ 
          marginBottom: '20px', 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ➕ Create New Post
      </button>

      {/* List of displayed posts */}
      <h2>Recent Content</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Click "Create New Post" to add one!</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostDisplay key={post.id} post={post} />
          ))}
        </div>
      )}

      {/* The Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Function to close the modal
        onPost={handleNewPost} // Function to handle the form data
      />
    </div>
  );
};

export default HomePage;