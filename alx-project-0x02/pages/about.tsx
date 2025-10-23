// pages/about.tsx
import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <Header />
      <h1>About Us</h1>
      <p>We are dedicated to building high-quality, reusable components.</p>
      
      <h2>Reusable Button Showcase</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
        
        <Button 
          size="small" 
          shape="rounded-sm" 
          onClick={() => alert('Clicked Small Button')}
        >
          Small & Square
        </Button>

        <Button 
          size="medium" 
          shape="rounded-full"
          onClick={() => alert('Clicked Medium Button')}
        >
          Medium & Pill-shaped
        </Button>

        <Button 
          size="large" 
          shape="rounded-md"
          onClick={() => alert('Clicked Large Button')}
          style={{ backgroundColor: '#dc3545' }} 
        >
          Large & Danger
        </Button>
        
        <Button onClick={() => console.log('Default')}>
          Default Button
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;