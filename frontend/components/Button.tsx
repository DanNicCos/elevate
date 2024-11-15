import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
    {text}
  </button>
);

export default Button;
