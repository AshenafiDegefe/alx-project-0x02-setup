// components/common/Button.tsx
import React from 'react';
import { ButtonProps, ButtonSize, ButtonShape } from '@/interfaces';

const getSizeStyles = (size: ButtonSize): React.CSSProperties => {
  switch (size) {
    case 'small':
      return { padding: '6px 12px', fontSize: '12px' };
    case 'large':
      return { padding: '12px 24px', fontSize: '18px' };
    case 'medium':
    default:
      return { padding: '10px 18px', fontSize: '16px' };
  }
};

const getShapeStyles = (shape: ButtonShape): React.CSSProperties => {
  switch (shape) {
    case 'rounded-sm':
      return { borderRadius: '4px' };
    case 'rounded-full':
      return { borderRadius: '9999px' }; 
    case 'rounded-md':
    default:
      return { borderRadius: '8px' };
  }
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'medium', 
  shape = 'rounded-md', 
  style = {}, 
  ...rest 
}) => {
  
  const sizeStyles = getSizeStyles(size);
  const shapeStyles = getShapeStyles(shape);

  const baseStyles: React.CSSProperties = {
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    backgroundColor: '#007bff', 
    color: 'white',
    transition: 'background-color 0.3s ease',
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles,
    ...shapeStyles,
    ...style, 
  };

  return (
    <button 
      style={combinedStyles} 
      {...rest} 
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#0056b3';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#007bff';
      }}
    >
      {children}
    </button>
  );
};

export default Button;