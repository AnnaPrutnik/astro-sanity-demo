import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-lg md:text-xl';

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${className}`} onClick={onClick}>
        {children}
        <svg
          className="ml-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
      <svg
        className="ml-2 h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};

export default Button;
